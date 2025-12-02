import { Github, Linkedin, Mail } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about-me" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About the <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Developer</span>
                    </h2>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Hi! I'm  Josh, a passionate UX/UI Designer and full-stack developer who loves building intuitive and powerful web applications.
                            Thinkboard was born from my own need for a simple, elegant way to organize thoughts and ideas.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            With expertise in the MERN stack (MongoDB, Express, React, Node.js), I focus on creating
                            seamless user experiences backed by robust, scalable architecture. Every line of code is written
                            with performance, security, and user satisfaction in mind.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                            or thinking about the next big idea to build.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-6">
                            <a
                                href="https://github.com/joshrubio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group"
                            >
                                <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/joshuerubio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group"
                            >
                                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                            </a>
                            <a
                                href="mailto:joshrubio@gmail.com"
                                className="p-3 rounded-lg bg-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200 group"
                            >
                                <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
