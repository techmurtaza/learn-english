import React, { useState, useEffect, useRef } from "react";
import {
    School,
    LightbulbOutlined,
    CheckCircle,
    Cancel,
    ArrowForward,
    RestartAlt,
    EmojiEvents,
} from "@mui/icons-material";

function Questions() {
    const [questionCount, setQuestionCount] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [finished, setFinished] = useState(false);
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(10);

    const fetchQuestions = () => {
        setLoading(true);
        axios
            .get(`/api/words/questions/${questionCount}`)
            .then((response) => {
                setQuestions(response.data);
            })
            .catch((error) => {
                setError("An error occurred while fetching data.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        if (questionCount) {
            fetchQuestions();
        }
    }, [questionCount]);

    const handleAnswer = () => {
        const correct =
            questions[currentIndex].correct_answer === selectedAnswer;
        setResults([
            ...results,
            { question: questions[currentIndex], correct },
        ]);
        setSelectedAnswer("");
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setFinished(true);
        }
    };

    const resetQuiz = () => {
        setQuestionCount(null);
        setCurrentIndex(0);
        setSelectedAnswer("");
        setFinished(false);
        setResults([]);
    };

    function setQuestionValue() {
        if (inputRef.current.value === "") {
            alert("Please enter a number between 10 and 50");
            return;
        }
        if (inputRef.current.value < 10 || inputRef.current.value > 50) {
            alert("Please enter a number between 10 and 50");
            return;
        }
        setQuestionCount(inputRef.current.value);
    }
    return (
        <div className="min-h-screen bg-flf-cream py-8 px-4 sm:px-6 lg:px-8">
            {loading && <LoadingOverlay />}
            {error && (
                <div className="max-w-3xl mx-auto mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                    {error}
                </div>
            )}

            <div className="max-w-3xl mx-auto">
                {!questionCount ? (
                    // Question Count Selection Screen
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <School className="h-16 w-16 text-flf-dark mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-flf-dark mb-2">
                                Ready to Test Your Knowledge?
                            </h2>
                            <p className="text-gray-600">
                                Choose how many questions you'd like to answer
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-full max-w-md">
                                <label className="block text-sm font-medium text-flf-dark mb-2">
                                    Number of Questions (10-50)
                                </label>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        className="block w-full px-4 py-3 rounded-lg bg-flf-cream border-2 border-flf-cream-dark focus:border-flf-dark-light focus:ring-0 transition-colors"
                                        type="number"
                                        min="10"
                                        max="50"
                                        onChange={(e) =>
                                            setNumber(e.target.value)
                                        }
                                        value={number}
                                        ref={inputRef}
                                    />
                                    <button
                                        className="px-6 py-3 bg-flf-dark text-white rounded-lg hover:bg-flf-dark-light transition-colors flex items-center gap-2"
                                        onClick={setQuestionValue}
                                    >
                                        Start Quiz
                                        <ArrowForward className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : finished ? (
                    // Results Screen
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="inline-block p-3 rounded-full bg-flf-cream mb-4">
                                <EmojiEvents className="h-12 w-12 text-flf-dark" />
                            </div>
                            <h2 className="text-2xl font-bold text-flf-dark mb-2">
                                Quiz Complete!
                            </h2>
                            <p className="text-xl text-flf-dark-light">
                                You scored:{" "}
                                <span className="font-bold">
                                    {
                                        results.filter(
                                            (result) => result.correct
                                        ).length
                                    }
                                </span>{" "}
                                out of {results.length}
                            </p>
                        </div>

                        <div className="bg-flf-cream rounded-xl p-4 mb-6">
                            <div className="space-y-4">
                                {results.map((result, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg p-4 flex items-center justify-between"
                                    >
                                        <div>
                                            <p className="font-medium text-flf-dark">
                                                {result.question.word}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Correct:{" "}
                                                {result.question.correct_answer}
                                            </p>
                                        </div>
                                        {result.correct ? (
                                            <CheckCircle className="h-6 w-6 text-green-500" />
                                        ) : (
                                            <Cancel className="h-6 w-6 text-red-500" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="w-full py-3 bg-flf-dark text-white rounded-lg hover:bg-flf-dark-light transition-colors flex items-center justify-center gap-2"
                            onClick={resetQuiz}
                        >
                            <RestartAlt className="w-5 h-5" />
                            Try Again
                        </button>
                    </div>
                ) : (
                    // Question Screen
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-flf-dark">
                                    Question {currentIndex + 1} of{" "}
                                    {questions.length}
                                </h2>
                                <span className="px-3 py-1 bg-flf-cream text-flf-dark rounded-full text-sm flex items-center gap-1">
                                    <LightbulbOutlined className="w-4 h-4" />
                                    Progress:{" "}
                                    {Math.round(
                                        (currentIndex / questions.length) * 100
                                    )}
                                    %
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-flf-dark h-2 rounded-full transition-all duration-300"
                                    style={{
                                        width: `${
                                            (currentIndex / questions.length) *
                                            100
                                        }%`,
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-flf-dark mb-6">
                                {questions[currentIndex]?.word}
                            </h3>
                            <div className="grid gap-3">
                                {questions[currentIndex]?.answers.map(
                                    (answer, index) => (
                                        <label
                                            key={index}
                                            className={`
                                            p-4 rounded-lg border-2 cursor-pointer transition-all
                                            ${
                                                selectedAnswer === answer
                                                    ? "border-flf-dark bg-flf-cream"
                                                    : "border-gray-200 hover:border-flf-dark-lighter"
                                            }
                                        `}
                                        >
                                            <div className="flex items-center justify-between">
                                                <input
                                                    type="radio"
                                                    name="answer"
                                                    value={answer}
                                                    checked={
                                                        selectedAnswer ===
                                                        answer
                                                    }
                                                    onChange={(e) =>
                                                        setSelectedAnswer(
                                                            e.target.value
                                                        )
                                                    }
                                                    disabled={
                                                        selectedAnswer !== ""
                                                    }
                                                    className="hidden"
                                                />
                                                <span className="text-lg text-flf-dark">
                                                    {answer}
                                                </span>
                                                {selectedAnswer === answer && (
                                                    <CheckCircle className="w-5 h-5 text-flf-dark" />
                                                )}
                                            </div>
                                        </label>
                                    )
                                )}
                            </div>
                        </div>

                        {selectedAnswer && (
                            <div className="mb-6 p-4 bg-flf-cream rounded-lg flex items-center gap-2">
                                <LightbulbOutlined className="w-5 h-5 text-flf-dark" />
                                <p className="text-flf-dark font-medium">
                                    Correct Answer:{" "}
                                    {questions[currentIndex]?.correct_answer}
                                </p>
                            </div>
                        )}

                        <button
                            className={`
                                w-full py-3 rounded-lg transition-colors flex items-center justify-center gap-2
                                ${
                                    selectedAnswer
                                        ? "bg-flf-dark text-white hover:bg-flf-dark-light"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                }
                            `}
                            onClick={handleAnswer}
                            disabled={!selectedAnswer}
                        >
                            Next Question
                            <ArrowForward className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-flf-dark bg-opacity-75 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-flf-cream border-t-transparent"></div>
    </div>
);

export default Questions;
