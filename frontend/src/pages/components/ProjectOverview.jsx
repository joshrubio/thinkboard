import { Target, Lightbulb, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectOverview = () => {
    return (
        <section id="project-overview" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-10 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                animate={{
                    y: [0, -40, 0],
                    x: [0, 40, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-10 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                animate={{
                    y: [0, 40, 0],
                    x: [0, -40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Project <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Overview</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A full-stack note-taking application demonstrating modern web development practices
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Challenge */}
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                    >
                        <motion.div
                            className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6 shadow-lg"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Target className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Create a full-stack application that allows users to capture, organize, and manage their thoughts
                            with a clean, intuitive interface while demonstrating proficiency in the MERN stack.
                        </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                    >
                        <motion.div
                            className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 mb-6 shadow-lg"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Lightbulb className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Thinkboard provides a streamlined note-taking experience with real-time updates,
                            cloud storage, and a modern gradient-based UI that makes organizing thoughts effortless and enjoyable.
                        </p>
                    </motion.div>

                    {/* Implementation */}
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                    >
                        <motion.div
                            className="inline-flex p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 mb-6 shadow-lg"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Code className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">Implementation</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Built with React for dynamic UI, Express/Node.js for robust API, MongoDB for flexible data storage,
                            and Tailwind CSS for modern, responsive design.
                        </p>
                    </motion.div>
                </div>

                {/* Key Metrics */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                            100%
                        </div>
                        <div className="text-gray-400">Responsive</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                            RESTful
                        </div>
                        <div className="text-gray-400">API Design</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent mb-2">
                            Modern
                        </div>
                        <div className="text-gray-400">UI/UX</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent mb-2">
                            Cloud
                        </div>
                        <div className="text-gray-400">Based</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectOverview;
