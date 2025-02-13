<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Word extends Model
{
    use HasFactory;
    use softDeletes;

    protected $fillable = [
        'english_word',
        'english_meaning',
        'hindi_meaning',
        'hindi_translation',
        'frequency_of_use',
        'collocations',
        'thematic_relations',
        'common_mistakes',
        'explanations',
        'use_cases',
        'synonyms',
        'antonyms',
        'pronunciation'
    ];

    protected $casts = [
        'collocations' => 'array',
        'thematic_relations' => 'array',
        'synonyms' => 'array',
        'antonyms' => 'array',
        'explanations' => 'object',
        'use_cases' => 'object',
    ]; 

    public function parts_of_speech() {
        return $this->belongsToMany(PartOfSpeech::class, 'word_part_of_speech', 'word_id', 'part_of_speech_id');
    }
}
