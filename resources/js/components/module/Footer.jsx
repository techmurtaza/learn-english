import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTime from '@mui/icons-material/AccessTime';
import { Email as EmailIcon } from '@mui/icons-material';


function Footer() {
    const websiteLink = "https://flfenglishclasses.com/";
    return (
        <footer className="bg-gradient-to-b from-flf-cream to-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
                    {/* About Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-2xl font-bold text-flf-dark">WordyWonder</h2>
                            <p className="text-sm text-gray-700 max-w-md">
                                An initiative by Fatema Lightwala, bringing 33+ years of English teaching
                                excellence to help you master English vocabulary and communication skills.
                            </p>
                            <div className="flex items-center space-x-4 mt-4">
                                <span className="text-xs text-gray-500">Powered by</span>
                                <a 
                                    href={websiteLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-flf-dark font-semibold hover:text-flf-dark-light"
                                >
                                    Fatema's Learning Frontier
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/words" className="text-gray-700 hover:text-flf-dark-light text-sm">
                                    Words Collection
                                </Link>
                            </li>
                            <li>
                                <Link to="/questions" className="text-gray-700 hover:text-flf-dark-light text-sm">
                                    Practice Questions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-4">Connect With Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <PhoneIcon className="w-5 h-5 text-flf-dark mt-1" />
                                <a href="tel:+919303889588" className="text-sm text-gray-700">+91 930 388 9588</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <EmailIcon className="w-5 h-5 text-flf-dark mt-1" />
                                <a href="mailto:fatemaslearningfrontier@gmail.com" className="text-sm text-gray-700">fatemaslearningfrontier@gmail.com</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <AccessTime className="w-5 h-5 text-flf-dark mt-1" />
                                <span className="text-sm text-gray-700">Evening Batch: 4 PM - 8 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-700">
                            © {new Date().getFullYear()} WordyWonder. All rights reserved.
                        </div>
                        <div className="mt-4 md:mt-0">
                            <a 
                                href={websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-flf-dark text-flf-cream rounded-full hover:bg-flf-dark-light transition-colors text-sm"
                            >
                                Visit Fatema's Learning Frontier
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            <div className="mt-4 text-center text-sm text-gray-500">
                Crafted with <span className="text-red-500">♥</span> by 
                <a 
                    href="https://technoformatics.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-flf-dark hover:text-flf-dark-light font-semibold ml-1"
                >
                    TechnoFormatics
                </a>
            </div>
            </div>
        </footer>
    );
}

export default Footer;