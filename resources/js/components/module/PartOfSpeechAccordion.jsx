import { useState } from "react";
import JsonArrayDisplay from "../helper/JsonArrayDisplay";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";


const PartOfSpeechAccordion = ({ partsOfSpeech }) => {
    const [activePosId, setActivePosId] = useState(null);

    return (
        <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">
                Part of Speech
            </h4>
            <div className="space-y-2">
                {partsOfSpeech.map((pos) => (
                    <div
                        key={pos.id}
                        className="bg-white rounded-lg border border-flf-dark/10"
                    >
                        <div
                            onClick={() =>
                                setActivePosId(
                                    activePosId === pos.id ? null : pos.id
                                )
                            }
                            className="p-3 cursor-pointer hover:bg-flf-cream/30 flex justify-between items-center"
                        >
                            <h5 className="font-medium text-flf-dark">
                                {pos.part_of_speech}
                            </h5>
                            {activePosId === pos.id ? (
                                <ExpandLessIcon className="w-6 h-6 text-flf-dark/70" />
                            ) : (
                                <ExpandMoreIcon className="w-6 h-6 text-flf-dark/70" />
                            )}
                        </div>

                        {activePosId === pos.id && (
                            <div className="p-3 border-t border-flf-dark/20">
                                <div className="pl-4">
                                    <h6 className="font-medium text-flf-dark/80 mb-2">
                                        Definitions:
                                    </h6>
                                    <JsonArrayDisplay
                                        data={pos.definition}
                                        className="list-disc mb-3"
                                    />
                                    <h6 className="font-medium text-flf-dark/80 mb-2">
                                        Examples:
                                    </h6>
                                    <JsonArrayDisplay
                                        data={pos.example}
                                        className="text-flf-dark italic"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartOfSpeechAccordion;
