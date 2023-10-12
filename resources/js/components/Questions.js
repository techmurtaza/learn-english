import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
function Questions() {
    const [questionCount, setQuestionCount] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [finished, setFinished] = useState(false);
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(10);

    const fetchQuestions = () => {
        setLoading(true);
        axios.get(`/api/words/questions/${questionCount}`)
            .then(response => {
            setQuestions(response.data);
            }).catch(error => {
                setError("An error occurred while fetching data.");
            }).finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        if (questionCount) {
            fetchQuestions();
        }
    }, [questionCount]);

    const handleAnswer = () => {
        const correct = questions[currentIndex].correct_answer === selectedAnswer;
        setResults([...results, { question: questions[currentIndex], correct }]);
        setSelectedAnswer('');
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setFinished(true);
        }
    };

    const resetQuiz = () => {
        setQuestionCount(null);
        setCurrentIndex(0);
        setSelectedAnswer('');
        setFinished(false);
        setResults([]);
    };

    function setQuestionValue() {
        if (inputRef.current.value === '') {
            alert('Please enter a number between 10 and 50');
            return;
        }
        if ( inputRef.current.value < 10 || inputRef.current.value > 50) {
            alert('Please enter a number between 10 and 50');
            return;
        }
        setQuestionCount(inputRef.current.value)
    }
    function LoadingOverlay() {
        return (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            </div>
        );
    }
    return (
        <>
            {loading && <LoadingOverlay />}
            {error && <div className="text-red-500">{error}</div>}
            <div className="p-5 bg-gray-100 rounded-md shadow-lg">
                {!questionCount ? (
                <div className='flex justify-center align-content-center items-center flex-col'>
                    <label htmlFor="questionCount" className="block my-2 text-gray-700">Enter Question Count (10-50): </label>
                    <div className='flex justify-center'>
                        <input 
                            className="ml-2 border p-2 rounded"
                            type="number" 
                            id="questionCount" 
                            min="10" 
                            max="50"
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            ref={inputRef}
                        />
                        <button 
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" 
                        onClick={setQuestionValue}
                        >
                        Set Count
                        </button>
                    </div>
                </div>
                ) : finished ? (
                <div>
                    <h2 className="text-xl font-bold">Your Score: {results.filter(result => result.correct).length}</h2>
                    <table className="min-w-full bg-white rounded-md mt-4">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                        <th className='py-2 px-4 text-left'>Word</th>
                        <th className='py-2 px-4 text-left'>Correct Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                        <tr key={index} className='border-b border-gray-200'>
                            <td className='py-2 px-4'>{result.question.word}</td>
                            <td className='py-2 px-4'>{result.question.correct_answer}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full" onClick={resetQuiz}>Reset</button>
                </div>
                ) : (
                    <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">Question {currentIndex + 1}</h2>
                        <p className="mt-2">{questions[currentIndex]?.word}</p>
                        {questions[currentIndex]?.answers.map((answer, index) => (
                        <label key={index} className="flex items-center my-2 cursor-pointer">
                            <input
                            type="radio"
                            name="answer"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                            disabled={selectedAnswer !== ''}
                            />
                            <span className="ml-2">{answer}</span>
                        </label>
                        ))}
                    </div>
                    {selectedAnswer && (
                        <div className="mb-4 text-green-500">
                        Correct Answer: {questions[currentIndex]?.correct_answer}
                        </div>
                    )}
                    <button 
                        className={`px-4 py-2 rounded-full ${selectedAnswer ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-200'}`} 
                        onClick={handleAnswer} 
                        disabled={!selectedAnswer}
                    >
                        Next
                    </button>
                    </div>
                )}
            </div>
        </>
    );
ˀ}
  
  export default Questions;