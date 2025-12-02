const TechStack = () => {
    const technologies = {
        frontend: [
            { name: 'React', description: 'UI library for building interactive interfaces', color: 'from-cyan-600 to-blue-600' },
            { name: 'Vite', description: 'Next-generation frontend tooling', color: 'from-purple-600 to-pink-600' },
            { name: 'Tailwind CSS', description: 'Utility-first CSS framework', color: 'from-sky-600 to-cyan-600' },
            { name: 'Framer Motion', description: 'Production-ready animation library', color: 'from-pink-600 to-rose-600' },
            { name: 'React Router', description: 'Client-side routing', color: 'from-red-600 to-orange-600' }
        ],
        backend: [
            { name: 'Node.js', description: 'JavaScript runtime environment', color: 'from-green-600 to-emerald-600' },
            { name: 'Express', description: 'Fast, minimalist web framework', color: 'from-gray-600 to-slate-600' },
            { name: 'MongoDB', description: 'NoSQL database for flexibility', color: 'from-green-600 to-teal-600' },
            { name: 'Mongoose', description: 'MongoDB object modeling', color: 'from-red-600 to-rose-600' }
        ]
    };

    return (
        <section id="tech-stack" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tech <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Stack</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Built with the MERN stack for a modern, scalable, and performant application
                    </p>
                </div>

                {/* Frontend Technologies */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Frontend</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {technologies.frontend.map((tech, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <div className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${tech.color} mb-4 shadow-lg`}>
                                    <span className="text-white font-bold">{tech.name}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{tech.description}</p>
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Technologies */}
                <div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center">Backend</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technologies.backend.map((tech, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
                            >
                                <div className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${tech.color} mb-4 shadow-lg`}>
                                    <span className="text-white font-bold">{tech.name}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{tech.description}</p>
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
