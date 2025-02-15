import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoSection from "../helper/InfoSection";
import JsonArrayDisplay from "../helper/JsonArrayDisplay";
import PartOfSpeechAccordion from "./PartOfSpeechAccordion";

const AccordionContext = React.createContext();

// Separate WordCard Component
const WordCard = ({ word, activeWordId, setActiveWordId }) => {
    const isOpen = activeWordId === word.id;

    return (
        <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header Section */}
            <div
                onClick={() => setActiveWordId(isOpen ? null : word.id)}
                className="p-4 cursor-pointer hover:bg-flf-cream/30 flex justify-between items-center"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-flf-dark">
                            {word.english_word}
                        </h3>
                        {/* Parts of Speech Tags */}
                        <div className="flex gap-1">
                            {word.parts_of_speech.map((pos) => (
                                <span
                                    key={pos.id}
                                    className="px-2 py-1 text-xs font-medium rounded-full bg-flf-cream text-flf-dark"
                                >
                                    {pos.part_of_speech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-flf-dark/70">{word.hindi_meaning}</p>
                </div>
                {isOpen ? (
                    <ExpandLessIcon className="w-6 h-6 text-flf-dark/70" />
                ) : (
                    <ExpandMoreIcon className="w-6 h-6 text-flf-dark/70" />
                )}
            </div>

            {/* Detailed Content */}
            {isOpen && (
                <div className="p-4 bg-flf-cream/20 border-t border-flf-dark/10">
                     {/* Parts of Speech Definitions with Nested Accordion */}
                     <PartOfSpeechAccordion partsOfSpeech={word.parts_of_speech} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Basic Information */}
                        <div className="space-y-3">
                            <InfoSection
                                title="Basic Information"
                                items={[
                                    {
                                        label: "English Meaning",
                                        value: word.english_meaning,
                                    },
                                    {
                                        label: "Hindi Translation",
                                        value: word.hindi_translation,
                                    },
                                    {
                                        label: "Pronunciation",
                                        value: word.pronunciation,
                                    },
                                ]}
                            />
                        </div>

                        {/* Usage Information */}
                        <div className="space-y-3">
                            <InfoSection
                                title="Usage"
                                items={[
                                    {
                                        label: "Frequency of Use",
                                        value: word.frequency_of_use,
                                    },
                                    {
                                        label: "Common Mistakes",
                                        value: word.common_mistakes,
                                    },
                                ]}
                            />
                        </div>

                        {/* Relations */}
                        {word.synonyms && (
                            <div className="md:col-span-2">
                                <h4 className="font-semibold text-flf-dark/70 mb-2">
                                    Synonyms & Antonyms
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <JsonArrayDisplay
                                        title="Synonyms"
                                        data={word.synonyms}
                                    />
                                    <JsonArrayDisplay
                                        title="Antonyms"
                                        data={word.antonyms}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Use Cases and Examples */}
                        {word.use_cases && (
                            <div className="md:col-span-2">
                                <h4 className="ffont-semibold text-flf-dark mb-2">
                                    Examples & Use Cases
                                </h4>
                                <div className="bg-white p-3 rounded-lg">
                                    <JsonArrayDisplay
                                        data={word.use_cases}
                                        className="list-disc pl-5"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WordCard;
