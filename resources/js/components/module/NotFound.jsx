import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    SentimentVeryDissatisfied, 
    Home, 
    ArrowBack, 
    Search,
} from '@mui/icons-material';

// 404 Page Not Found
export function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-flf-cream flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Creative 404 Typography */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] font-bold text-flf-dark-lighter opacity-10">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <SentimentVeryDissatisfied className="text-flf-dark w-32 h-32" />
                    </div>
                </div>

                {/* Message */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-flf-dark mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Looks like you've ventured into uncharted territory. 
                        The page you're looking for has gone on a vocabulary vacation! 🌴
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => navigate(-1)}
                            className="px-6 py-3 bg-flf-dark text-white rounded-lg hover:bg-flf-dark-light transition-colors flex items-center justify-center gap-2"
                        >
                            <ArrowBack className="w-5 h-5" />
                            Go Back
                        </button>
                        <Link 
                            to="/"
                            className="px-6 py-3 bg-flf-dark-light text-white rounded-lg hover:bg-flf-dark transition-colors flex items-center justify-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            Home Page
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link 
                        to="/words"
                        className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold text-flf-dark">Word List</h3>
                        <p className="text-sm text-gray-600">Explore our vocabulary collection</p>
                    </Link>
                    <Link 
                        to="/questions"
                        className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold text-flf-dark">Practice Questions</h3>
                        <p className="text-sm text-gray-600">Test your knowledge</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}