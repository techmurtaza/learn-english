<?php

namespace App\Http\Controllers;

use App\Models\Word;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        try {
            $words = Word::paginate(20);
            return response()->json( $words, 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['error' => 'Something went wrong'], 500);
        }
    }

    /**
     * $wordsCount will be the number of words user need for a particular questions, it can be 10, 20 , 30 , 40 , 50..
     * In return we will find random words from the database and return it to the user.
     * and there will be 4 answers for each question, one will be correct and other 3 will be wrong.
     *
     * word : english_word
     * meaning : hindi_meaning
     * @param  \App\Models\Word  $word
     * @return \Illuminate\Http\Response
     */
    public function createWordsQuestions($wordsCount)
    {
        if ($wordsCount < 1) {
            return response()->json(['error' => 'Words count should be greater than 0'], 400);
        }
        if ($wordsCount > 100) {
            return response()->json(['error' => 'Words count should be less than 100'], 400);
        }
        try {
            $words = Word::inRandomOrder()->limit($wordsCount)->get();
            $questions = [];
            foreach ($words as $word) {
                $question = [];
                $question['word'] = $word->english_word;
                $question['correct_answer'] = $word->hindi_meaning;
                $answer = Word::inRandomOrder()->where('hindi_meaning', '!=', $word->hindi_meaning)->limit(3)->pluck('hindi_meaning')->toArray();
                array_push($answer, $word->hindi_meaning);
                shuffle($answer);
                $question['answers'] = $answer;
                array_push($questions, $question);
            }
            return response()->json( $questions, 200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['error' => 'Something went wrong'], 500);
        }
    }
}
