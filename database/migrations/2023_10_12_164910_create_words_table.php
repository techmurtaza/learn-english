<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWordsTable extends Migration
{
    /**
     * Run the migrations.
     * @definition: 
     * {
     *   "word": "about",
     *   "English_meaning": "Concerning or relating to; approximately",
     *   "Hindi_meaning": "किसी चीज़ के बारे में; लगभग",
     *   "Hindi_translation": "के आसपास",
     *   "frequency_of_use": 5,
     *   "Part_of_Speech": ["Preposition", "Adverb"],
     *   "Collocations": ["about time", "about to", "talk about"],
     *   "Thematic_Relations": ["Reference", "Estimation"],
     *   "Common_Mistakes": "Not to be confused with 'above' which relates to position",
     *   "explanations": {
     *       "simple": "Tells what something is like or how much there is.",
     *       "detailed": "Used to indicate the subject matter or to estimate numbers and amounts."
     *   },
     *   "use_cases": {
     *       "English": ["I read a book about space.", "He is about to leave."],
     *       "Hindi": ["मैंने अंतरिक्ष के बारे में एक किताब पढ़ी।", "वह जाने वाला है।"]
     *   },
     *   "synonyms": ["Regarding", "Concerning", "Approximately"],
     *   "antonyms": ["Unrelated", "Precise"],
     *   "Pronunciation": "uh-bout"
     *  }
     * @return void
     */
    public function up()
    {
        Schema::create('words', function (Blueprint $table) {
            $table->id();
            $table->string('english_word');
            $table->string('english_meaning')->nullable();
            $table->string('hindi_meaning')->nullable();
            $table->string('hindi_translation');
            $table->integer('frequency_of_use');
            $table->json('collocations')->nullable();
            $table->json('thematic_relations')->nullable();
            $table->text('common_mistakes')->nullable();
            $table->json('explanations')->nullable();
            $table->json('use_cases')->nullable();
            $table->json('synonyms')->nullable();
            $table->json('antonyms')->nullable();
            $table->string('pronunciation')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('word_part_of_speech', function (Blueprint $table) {
            $table->id();
            $table->foreignId('word_id')->constrained('words');
            $table->foreignId('part_of_speech_id')->constrained('parts_of_speech');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('word_part_of_speech');
        Schema::dropIfExists('words');
    }
}
