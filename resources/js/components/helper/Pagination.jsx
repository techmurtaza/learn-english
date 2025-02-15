import { useState } from "react";

const baseButtonStyle = "px-3 py-1 rounded-md transition-colors";
const primaryButtonStyle = `${baseButtonStyle} bg-flf-dark text-flf-cream hover:bg-flf-dark-light disabled:opacity-50`;
const secondaryButtonStyle = `${baseButtonStyle} bg-flf-cream hover:bg-flf-cream-dark text-flf-dark disabled:opacity-50`;

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
    const [jumpToPage, setJumpToPage] = useState("");

    const generatePageNumbers = () => {
        const pages = [];
        const showPages =
            window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 5 : 7; // Number of pages to show based on screen size

        let start = Math.max(1, currentPage - Math.floor(showPages / 2));
        let end = Math.min(lastPage, start + showPages - 1);

        if (end - start + 1 < showPages) {
            start = Math.max(1, end - showPages + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const handleJumpToPage = (e) => {
        e.preventDefault();
        const pageNum = parseInt(jumpToPage);
        if (pageNum >= 1 && pageNum <= lastPage) {
            onPageChange(pageNum);
            setJumpToPage("");
        }
    };

    return (
        <div className="mt-8 space-y-4">
            {/* Page Numbers */}
            <div className="flex items-center justify-center space-x-2">
                <button
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                    className={secondaryButtonStyle}
                >
                    ««
                </button>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={secondaryButtonStyle}
                >
                    «
                </button>

                {generatePageNumbers().map((pageNum) => (
                    <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`px-3 py-1 rounded-md ${
                            pageNum === currentPage
                                ? "bg-flf-dark text-flf-cream"
                                : "bg-flf-cream text-flf-dark hover:bg-flf-cream-dark"
                        }`}
                    >
                        {pageNum}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === lastPage}
                    className={secondaryButtonStyle}
                >
                    »
                </button>
                <button
                    onClick={() => onPageChange(lastPage)}
                    disabled={currentPage === lastPage}
                    className={secondaryButtonStyle}
                >
                    »»
                </button>
            </div>

            {/* Jump to Page Form */}
            <form
                onSubmit={handleJumpToPage}
                className="flex items-center justify-center space-x-2"
            >
                <input
                    type="number"
                    min="1"
                    max={lastPage}
                    value={jumpToPage}
                    onChange={(e) => setJumpToPage(e.target.value)}
                    className="w-24 px-2 py-1 border border-flf-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-flf-dark/20"
                    placeholder="Page #"
                />
                <button
                    type="submit"
                    className={primaryButtonStyle}
                >
                    Go
                </button>
            </form>
        </div>
    );
};

export default Pagination;
