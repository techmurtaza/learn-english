import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const websiteLink = "https://flfenglishclasses.com/";

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-gradient-to-r from-flf-cream to-white'
        }`}>
            <nav className="px-4 lg:px-6 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <Link to="/" className="flex flex-col">
                            <span className="text-2xl font-bold text-flf-dark">
                                WordyWonder
                            </span>
                            <span className="text-xs text-gray-600 -mt-1">
                                by Fatema Learning Frontier
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <NavLink to="/words" active={isActive('/words')}>
                                Words
                            </NavLink>
                            <NavLink to="/questions" active={isActive('/questions')}>
                                Questions
                            </NavLink>
                            <a 
                                href={websiteLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:bg-flf-cream/50 transition-colors text-sm font-medium"
                            >
                                Visit FLF →
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-flf-cream/50"
                        >
                            <svg 
                                className="w-6 h-6 text-gray-600" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
                            <div className="flex flex-col space-y-3 pt-4">
                                <MobileNavLink 
                                    to="/words" 
                                    active={isActive('/words')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Words
                                </MobileNavLink>
                                <MobileNavLink 
                                    to="/questions" 
                                    active={isActive('/questions')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Questions
                                </MobileNavLink>
                                <a 
                                    href={websiteLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-gray-600 hover:bg-flf-cream rounded-md text-sm"
                                >
                                    Visit FLF →
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

// NavLink Component for Desktop
const NavLink = ({ to, children, active }) => (
    <Link
        to={to}
        className={`font-medium transition-colors relative ${
            active
            ? 'text-flf-dark'
            : 'text-gray-600 hover:text-flf-dark-light'
        }`}
    >
        {children}
        {active && (
            <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-flf-dark rounded-full" />
        )}
    </Link>
);

// NavLink Component for Mobile
const MobileNavLink = ({ to, children, active, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className={`px-4 py-2 rounded-md ${
            active
                ? 'text-flf-dark bg-flf-cream font-medium'
                : 'text-gray-600 hover:bg-flf-cream/50'
        }`}
    >
        {children}
    </Link>
);

export default Header;