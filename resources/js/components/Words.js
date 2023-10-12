import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
function Words() {
    const [words, setWords] = useState([]);
    const [page, setpage] = useState(1);
    const [lastpage, setlastpage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        callWords(page);
        }, [page, callWords]);

    const callWords = (page) => {
        setLoading(true);
        axios.get('/api/words?page=' + page)
            .then(response => {
                setWords(response.data.data);
                setlastpage(response.data.last_page);
            }).catch(error => {
                setError("An error occurred while fetching data.");
            }).finally(() => {
                setLoading(false);
            });
    }

    const callPrev = () => {
        callWords(page - 1);
        setpage(page - 1);
    }

    const callNext = () => {
        callWords(page + 1);
        setpage(page + 1);
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
            <div className='bg-gray-100 p-5 rounded-md shadow-lg'>
                <table className='min-w-full bg-white rounded-md'>
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th className='py-2 px-4 text-left'>Word</th>
                            <th className='py-2 px-4 text-left'>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words.map(word => (
                            <tr key={word.id} className='border-b border-gray-200'>
                                <td className='py-2 px-4'>{word.english_word}</td>
                                <td className='py-2 px-4'>{word.hindi_meaning}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {words &&
                <div className='flex items-center justify-center w-full mt-5'>
                    <button disabled={page <= 1} className='px-4 py-2 bg-blue-500 text-white rounded-full' onClick={callPrev}>Previous</button>
                    <span className='mx-5 text-gray-700'>Page: {page}</span>
                    <button disabled={page >= lastpage} className='px-4 py-2 bg-blue-500 text-white rounded-full' onClick={callNext}>Next</button>
                </div>
            }
        </>

    );
}

export default Words;