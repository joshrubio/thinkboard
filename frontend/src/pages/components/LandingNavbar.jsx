import { Link } from 'react-router';

const LandingNavbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Thinkboard
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('project-overview')}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Project
                        </button>
                        <button
                            onClick={() => scrollToSection('tech-stack')}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            Tech Stack
                        </button>
                        <button
                            onClick={() => scrollToSection('about-me')}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            About
                        </button>

                        {/* CTA Button */}
                        <Link
                            to="/app"
                            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
                        >
                            Start Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Link
                            to="/app"
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold"
                        >
                            Start Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default LandingNavbar;
