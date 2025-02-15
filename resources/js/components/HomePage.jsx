import { Link } from "react-router-dom";

function HomePage() {
    const websiteLink = "https://flfenglishclasses.com/";
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-flf-cream via-white to-flf-cream">
                <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-4xl lg:text-5xl font-bold text-flf-dark">
                                Master English Words
                                <span className="block text-flf-dark-lighter mt-2">
                                    Build Confidence
                                </span>
                            </h1>
                            <p className="text-lg text-gray-700 max-w-md">
                                Enhance your vocabulary and communication skills with our curated collection 
                                of words and interactive practice questions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/words" 
                                    className="inline-flex items-center justify-center px-6 py-3 bg-flf-dark text-flf-cream rounded-lg hover:bg-flf-dark-light transition-colors"
                                >
                                    Explore Words
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link 
                                    to="/questions" 
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-flf-dark text-flf-dark rounded-lg hover:bg-flf-cream-dark transition-colors"
                                >
                                    Practice Questions
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block ">
                            {/* You can add an illustration or image here */}
                            <img 
                                src="https://flfenglishclasses.com/assets/logo/android-chrome-512x512.png" 
                                alt="Learning Illustration" 
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-flf-dark">Why Choose WordyWonder?</h2>
                        <p className="text-gray-600 mt-4">Discover the features that make learning English engaging and effective</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon="📚"
                            title="Curated Word Collection"
                            description="Carefully selected words with detailed explanations, usage examples, and pronunciation guides."
                        />
                        <FeatureCard 
                            icon="✍️"
                            title="Interactive Practice"
                            description="Engage with our collection of practice questions to reinforce your learning."
                        />
                        <FeatureCard 
                            icon="🎯"
                            title="Expert Guidance"
                            description="Learn from Fatema Lightwala's 33+ years of English teaching experience."
                        />
                    </div>
                </div>
            </section>

            {/* About Teacher Section */}
            <section className="py-16 text-flf-cream">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden">
                            {/* Add teacher's image here */}
                            <img 
                                src="https://flfenglishclasses.com/assets/images/fatema-lightwala.jpg" 
                                alt="Fatema Lightwala" 
                                className="w-full max-h-[500px] object-contain"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-flf-dark">Meet Your Mentor</h2>
                            <p className="text-gray-700">
                                With over three decades of teaching experience, Fatema Lightwala has 
                                transformed thousands of lives through expert English coaching. Her 
                                unique teaching methodology focuses on building confidence while 
                                mastering the language.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-flf-dark/10 rounded-lg p-4 bg-white">
                                    <div className="text-2xl font-bold text-flf-dark">33+</div>
                                    <div className="text-sm text-gray-700">Years Experience</div>
                                </div>
                                <div className="border border-flf-dark/10 rounded-lg p-4 bg-white">
                                    <div className="text-2xl font-bold text-flf-dark">4500+</div>
                                    <div className="text-sm text-gray-700">Students Taught</div>
                                </div>
                            </div>
                            <a 
                                href={websiteLink}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-flf-dark hover:text-flf-dark-light"
                            >
                                Learn more about Fatema's Learning Frontier
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-flf-dark text-flf-cream py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your English?</h2>
                    <p className="ext-flf-cream/90 mb-8 max-w-2xl mx-auto">
                        Start your journey to English mastery today with our comprehensive 
                        word collection and practice questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/words" 
                            className="px-8 py-3 bg-flf-cream text-flf-dark rounded-lg hover:bg-flf-cream-dark transition-colors"
                        >
                            Start Learning
                        </Link>
                        <a 
                            href={websiteLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-flf-cream text-flf-dark rounded-lg hover:bg-flf-cream-dark transition-colors"
                        >
                            Visit Main Website
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
    return (
        <div className="p-6 border border-flf-dark/10 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-flf-dark mb-2">{title}</h3>
            <p className="text-flf-dark/80">{description}</p>
        </div>
    );
}

export default HomePage;