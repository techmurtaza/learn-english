<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\PartOfSpeech;

class CreatePartOfSpeech extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('parts_of_speech', function (Blueprint $table) {
            $table->id();
            $table->string('part_of_speech');
            $table->string('slug');
            $table->json('definition');
            $table->json('example');
            $table->timestamps();
            $table->unique('slug');
        });

        $parts_of_speech = [
            [
                "partOfSpeech" => "Noun",
                "definition" => [
                    "English" => "A word for a person, place, or thing.",
                    "Hindi" => "व्यक्ति, स्थान या चीज़ का नाम।"
                ],
                "example" => [
                    "English" => "The cat is on the roof.",
                    "Hindi" => "बिल्कुल कुर्सी पर है।"
                ]
            ],
            [
                "partOfSpeech" => "Pronoun",
                "definition" => [
                    "English" => "A word used instead of a noun.",
                    "Hindi" => "संज्ञा की जगह पर प्रयुक्त शब्द।"
                ],
                "example" => [
                    "English" => "She is going to the market.",
                    "Hindi" => "वह बाजार जा रहा है।"
                ]
            ],
            [
                "partOfSpeech" => "Verb",
                "definition" => [
                    "English" => "A word that shows action.",
                    "Hindi" => "कोई कार्य दिखाने वाला शब्द।"
                ],
                "example" => [
                    "English" => "The kids play in the garden.",
                    "Hindi" => "बच्चे बगीचे में खेलते हैं।"
                ]
            ],
            [
                "partOfSpeech" => "Adjective",
                "definition" => [
                    "English" => "A word that describes a noun.",
                    "Hindi" => "संज्ञा को वर्णन करने वाला शब्द।"
                ],
                "example" => [
                    "English" => "The tall girl is my sister.",
                    "Hindi" => "लम्बी लड़की मेरी बहन है।"
                ]
            ],
            [
                "partOfSpeech" => "Adverb",
                "definition" => [
                    "English" => "A word that describes a verb, adjective, or another adverb.",
                    "Hindi" => "क्रिया, विशेषण या दूसरे क्रिया विशेषण को वर्णन करने वाला शब्द।"
                ],
                "example" => [
                    "English" => "She sings beautifully.",
                    "Hindi" => "वह सुंदरता से गाती है।"
                ]
            ],
            [
                "partOfSpeech" => "Preposition",
                "definition" => [
                    "English" => "A word that shows the relationship between a noun or pronoun and other words.",
                    "Hindi" => "संज्ञा या सर्वनाम और दूसरे शब्दों के बीच संबंध दिखाने वाला शब्द।"
                ],
                "example" => [
                    "English" => "The book is on the table.",
                    "Hindi" => "किताब मेज़ पर है।"
                ]
            ],
            [
                "partOfSpeech" => "Conjunction",
                "definition" => [
                    "English" => "A word that joins words or groups of words.",
                    "Hindi" => "शब्दों या शब्द समूहों को जोड़ने वाला शब्द।"
                ],
                "example" => [
                    "English" => "She likes coffee and tea.",
                    "Hindi" => "वह चाय और कॉफ़ी पसंद करता है।"
                ]
            ],
            [
                "partOfSpeech" => "Interjection",
                "definition" => [
                    "English" => "A word that shows strong feeling or reaction.",
                    "Hindi" => "भावना या प्रतिक्रिया दिखाने वाला शब्द।"
                ],
                "example" => [
                    "English" => "Wow! That's amazing.",
                    "Hindi" => "वाह! यह अद्भुत है।"
                ]
            ],
            [
                "partOfSpeech" => "Article",
                "definition" => [
                    "English" => "Words that go before nouns to show whether they are general or specific.",
                    "Hindi" => "संज्ञा से पहले आने वाले शब्द, जो दिखाते हैं कि वे सामान्य हैं या विशिष्ट।"
                ],
                "example" => [
                    "English" => "A cat is an animal.",
                    "Hindi" => "एक बिल्कुल एक जानवर है।"
                ]
            ],
            [
                "partOfSpeech" => "Determiner",
                "definition" => [
                    "English" => "Words that go before nouns to show which or how many.",
                    "Hindi" => "संज्ञा से पहले आने वाले शब्द, जो दिखाते हैं कि कौन सा या कितने।"
                ],
                "example" => [
                    "English" => "These apples are fresh.",
                    "Hindi" => "ये सेब ताज़े हैं।"
                ]
            ],
            [
                "partOfSpeech" => "Abbreviation",
                "definition" => [
                    "English" => "A shortened form of a word or phrase.",
                    "Hindi" => "किसी शब्द या वाक्यांश का संक्षेपित रूप।"
                ],
                "example" => [
                    "English" => "The abbreviation for 'Doctor' is 'Dr.'",
                    "Hindi" => "'डॉक्टर' का संक्षेप 'डॉ.' है।"
                ]
            ],
            [
                "partOfSpeech" => "Number",
                "definition" => [
                    "English" => "A word or symbol that represents a specific amount or quantity.",
                    "Hindi" => "एक शब्द या प्रतीक जो एक विशिष्ट मात्रा या परिमाण को दर्शाता है।"
                ],
                "example" => [
                    "English" => "The number 10 indicates a quantity of ten items.",
                    "Hindi" => "संख्या 10 दस वस्तुओं की मात्रा को सूचित करती है।"
                ]
            ],
            [
                "partOfSpeech" => "Modal Verb",
                "definition" => [
                    "English" => "A type of verb that is used to indicate modality, which expresses necessity, possibility, ability, or permission.",
                    "Hindi" => "एक प्रकार की क्रिया जो संभावना, आवश्यकता, क्षमता, या अनुमति को व्यक्त करने के लिए प्रयुक्त होती है।"
                ],
                "example" => [
                    "English" => "She can swim.",
                    "Hindi" => "वह तैर सकती है।"
                ]
            ],
            [
                "partOfSpeech" => "Informal",
                "definition" => [
                    "English" => "A style of language used in casual or familiar settings, characterized by a relaxed and friendly tone.",
                    "Hindi" => "एक ऐसी भाषा की शैली जिसे आकस्मिक या परिचित सेटिंग्स में प्रयुक्त किया जाता है, जिसे एक आरामदायक और मित्रात्मक स्वर द्वारा वर्णित किया गया है।"
                ],
                "example" => [
                    "English" => "Hey there! What's up?",
                    "Hindi" => "अरे वहाँ! क्या हो रहा है?"
                ]
            ],
            [
                "partOfSpeech" => "Gerund",
                "definition" => [
                    "English" => "The -ing form of a verb that functions as a noun.",
                    "Hindi" => "क्रिया का -ing रूप जो संज्ञा की भांति कार्य करता है।"
                ],
                "example" => [
                    "English" => "Swimming is fun.",
                    "Hindi" => "तैरना मजेदार है।"
                ]
            ],
            [
                "partOfSpeech" => "Comparative",
                "definition" => [
                    "English" => "A form of an adjective or adverb used to compare two or more things.",
                    "Hindi" => "एक विशेषण या क्रिया विशेषण का रूप, जिसे दो या अधिक वस्तुओं की तुलना करने के लिए प्रयुक्त किया जाता है।"
                ],
                "example" => [
                    "English" => "She is taller than me.",
                    "Hindi" => "वह मुझसे लंबी है।"
                ]
            ],
            [
                "partOfSpeech" => "Superlative",
                "definition" => [
                    "English" => "A form of an adjective or adverb used to compare three or more things, indicating the highest degree of a quality.",
                    "Hindi" => "वह रूप जिसे तीन या अधिक वस्तुओं की तुलना करने के लिए प्रयुक्त किया जाता है, और एक गुण की उच्चतम सीमा को सूचित करता है।"
                ],
                "example" => [
                    "English" => "She is the tallest person in the class.",
                    "Hindi" => "वह कक्षा में सबसे लंबी है।"
                ]
            ],
            [
                "partOfSpeech" => "Possessive Pronoun",
                "definition" => [
                    "English" => "A pronoun indicating ownership or possession.",
                    "Hindi" => "एक सर्वनाम जो स्वामित्व या अधिकार सूचित करता है।"
                ],
                "example" => [
                    "English" => "This book is mine.",
                    "Hindi" => "यह किताब मेरी है।"
                ]
            ],
            [
                "partOfSpeech" => "Title",
                "definition" => [
                    "English" => "A word or phrase used to describe a person's position, job, or the name of a book, movie, etc.",
                    "Hindi" => "एक शब्द या वाक्यांश जिसे किसी व्यक्ति की स्थिति, नौकरी, या किसी पुस्तक, फिल्म आदि का नाम बताने के लिए प्रयुक्त किया जाता है।"
                ],
                "example" => [
                    "English" => "The title of the book is 'To Kill a Mockingbird'.",
                    "Hindi" => "पुस्तक का शीर्षक 'टू किल ए मॉकिंगबर्ड' है।"
                ]
            ],
            [
                "partOfSpeech" => "Contraction",
                "definition" => [
                    "English" => "A shortened form of one or two words where some letters are omitted and replaced by an apostrophe.",
                    "Hindi" => "एक या दो शब्दों का संक्षेपित रूप, जहां कुछ अक्षरों को छोड़ दिया गया है और उन्हें एक अपोस्ट्रोफ़ से बदल दिया गया है।"
                ],
                "example" => [
                    "English" => "Don't is a contraction of 'do not'.",
                    "Hindi" => "'डोंट' 'डू नॉट' का संक्षेपन है।"
                ]
            ],
            [
                "partOfSpeech" => "Plural-Phenomena",
                "definition" => [
                    "English" => "The plural form of the noun 'phenomenon,' referring to multiple observed facts or occurrences.",
                    "Hindi" => "'फेनोमेनोन' संज्ञा का बहुवचन रूप, जो कई देखे गए तथ्यों या घटनाओं को सूचित करता है।"
                ],
                "example" => [
                    "English" => "The Northern and Southern Lights are natural phenomena.",
                    "Hindi" => "नॉर्दन और सदर्न लाइट्स प्राकृतिक घटनाएँ हैं।"
                ]
            ],
            [
                "partOfSpeech" => "Definite Article",
                "definition" => [
                    "English" => "A word used to specify a particular noun as something known to the listener or reader.",
                    "Hindi" => "एक शब्द जिसे सुनने वाले या पाठक के लिए किसी विशेष संज्ञा को जाना जाता है, वह निर्दिष्ट करने के लिए प्रयुक्त किया जाता है।"
                ],
                "example" => [
                    "English" => "The dog is in the garden.",
                    "Hindi" => "कुत्ता बगीचे में है।"
                ]
            ],
            [
                "partOfSpeech" => "Numeral",
                "definition" => [
                    "English" => "A word, symbol, or figure used to represent a number.",
                    "Hindi" => "एक शब्द, प्रतीक या आंकड़ा जिसे एक संख्या को प्रतिष्ठित करने के लिए प्रयुक्त किया जाता है।"
                ],
                "example" => [
                    "English" => "Four (4) is a numeral.",
                    "Hindi" => "चार (4) एक संख्या है।"
                ]
            ],
            [
                "partOfSpeech" => "Relative Pronoun",
                "definition" => [
                    "English" => "A pronoun that introduces a relative clause, providing more information about a noun.",
                    "Hindi" => "एक सर्वनाम जो एक सापेक्ष वाक्यांश का परिचय देता है, जो एक संज्ञा के बारे में अधिक जानकारी प्रदान करता है।"
                ],
                "example" => [
                    "English" => "The man who lives next door is a doctor.",
                    "Hindi" => "जो आदमी अगले दरवाजे पर रहता है वह डॉक्टर है।"
                ]
            ],
            [
                "partOfSpeech" => "Interrogative Pronoun",
                "definition" => [
                    "English" => "A pronoun used to make asking questions easy, typically seeking information.",
                    "Hindi" => "एक सर्वनाम जो प्रश्न पूछना सरल बनाता है, आमतौर पर जानकारी प्राप्त करना।"
                ],
                "example" => [
                    "English" => "Who is going to the store?",
                    "Hindi" => "कौन दुकान जा रहा है?"
                ]
            ],
        ];

        foreach ($parts_of_speech as $part_of_speech) {
            $part_of_speech_obj = new PartOfSpeech();
            $part_of_speech_obj->part_of_speech = $part_of_speech['partOfSpeech'];
            $part_of_speech_obj->slug = Str::slug($part_of_speech['partOfSpeech']);
            $part_of_speech_obj->definition = json_encode($part_of_speech['definition']);
            $part_of_speech_obj->example = json_encode($part_of_speech['example']);
            $part_of_speech_obj->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('parts_of_speech');
    }
}
