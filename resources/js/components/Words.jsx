import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import WordCard from "./module/WordCard";
import Pagination from "./helper/Pagination";

function Words() {
    const [words, setWords] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeWordId, setActiveWordId] = useState(null);

    const callWords = useCallback((page) => {
        setLoading(true);
        axios
            .get("/api/words?page=" + page)
            .then((response) => {
                setWords(response.data.data);
                setLastPage(response.data.last_page);
            })
            .catch(() => {
                setError("An error occurred while fetching data.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        callWords(page);
    }, [page, callWords]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= lastPage) {
            setPage(newPage);
        }
    };

    function LoadingOverlay() {
        return (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {loading && <LoadingOverlay />}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                    {error}
                </div>
            )}

            {/* Search Bar (Optional) */}
            {/* <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search words..."
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div> */}

            {/* Words List */}
            <div className="space-y-4">
                {words.map((word) => (
                    <WordCard
                        key={word.id}
                        word={word}
                        activeWordId={activeWordId}
                        setActiveWordId={setActiveWordId}
                    />
                ))}
            </div>

            {/* Enhanced Pagination */}
            <Pagination
                currentPage={page}
                lastPage={lastPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Words;
