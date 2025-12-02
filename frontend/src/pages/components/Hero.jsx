import { Link } from 'react-router';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Organize Your Thoughts
                            </span>
                            <br />
                            <span className="text-white">Effortlessly</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                            Your digital canvas for ideas, notes, and inspiration. Capture, organize, and bring your thoughts to life.
                        </p>

                        {/* CTA Button */}
                        <div className="flex gap-4">
                            <Link
                                to="/app"
                                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-purple-500/50"
                            >
                                Start Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            <img
                                src="/hero-image.png"
                                alt="Thinkboard App Interface"
                                className="w-full h-auto object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 pointer-events-none"></div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
