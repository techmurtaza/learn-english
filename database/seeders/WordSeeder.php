<?php

namespace Database\Seeders;

use App\Models\Word;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;
use App\Models\PartOfSpeech;
use Illuminate\Support\Str;
class WordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $allPartsOfSpeech = PartOfSpeech::all()->toArray();
        $partsOfSpeech = array();
        foreach ($allPartsOfSpeech as $partOfSpeech) {
            $partsOfSpeech[$partOfSpeech['slug']] = $partOfSpeech['id'];
        }
        try {
			$stream = Storage::readStream('words_data.json');
        } catch (\Exception $e) {
			Log::error($e->getMessage());
			return;
        }
        $buffer = "";
        try {
			while (!feof($stream)) {
				$buffer .= fread($stream, 1024);
				$pos = strpos($buffer, "\n");
				while ($pos !== false) {
					$line = substr($buffer, 0, $pos);
					$buffer = substr($buffer, $pos + 1);
					$data = json_decode($line, true);
					$data = json_decode($data, true);
					$pos = strpos($buffer, "\n");

					$word = new Word();
					$word->english_word 		= $data['word'];

					if($data['English_meaning'] != null && $data['English_meaning'] != "")
						$word->english_meaning = $data['English_meaning'];

					if($data['Hindi_meaning'] != null && $data['Hindi_meaning'] != "")
						$word->hindi_meaning = $data['Hindi_meaning'];

					$word->hindi_translation = $data['Hindi_translation'];
					$word->frequency_of_use  = $data['frequency_of_use'];
					
					if ($data['Collocations'] != null && $data['Collocations'] != "")
						$word->collocations = $data['Collocations'];

					if ($data['Thematic_Relations'] != null && $data['Thematic_Relations'] != "")
						$word->thematic_relations = $data['Thematic_Relations'];

					if ($data['Common_Mistakes'] != null && $data['Common_Mistakes'] != "")
						$word->common_mistakes = $data['Common_Mistakes'];

					if ($data['explanations'] != null && $data['explanations'] != "")
						$word->explanations = $data['explanations'];

					if ($data['use_cases'] != null && $data['use_cases'] != "")
						$word->use_cases = $data['use_cases'];

					if ($data['synonyms'] != null && $data['synonyms'] != "")
						$word->synonyms = $data['synonyms'];

					if ($data['antonyms'] != null && $data['antonyms'] != "")
						$word->antonyms = $data['antonyms'];

					if ($data['Pronunciation'] != null && $data['Pronunciation'] != "")
						$word->pronunciation = $data['Pronunciation'];

					$word->save();

					Log::info($word->english_word);
					
					foreach ($data['Part_of_Speech'] as $partOfSpeech) {
						$word->parts_of_speech()->attach($partsOfSpeech[Str::slug($partOfSpeech)]);
					}
					$word->save();

					$pos = strpos($buffer, "\n");
				}
			}
			fclose($stream);
        } catch (\Exception $e) {
			Log::error($e->getMessage());
        }
    }
}
