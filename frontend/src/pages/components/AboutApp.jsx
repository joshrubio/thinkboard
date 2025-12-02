import { BookOpen, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutApp = () => {
    const features = [
        {
            icon: BookOpen,
            title: 'Capture Everything',
            description: 'Never lose a thought again. Quickly jot down ideas, notes, and inspirations in a clean, distraction-free interface.',
            gradient: 'from-blue-600 to-cyan-600',
            delay: 0.1
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Built for speed. Create, edit, and organize your notes instantly with our optimized performance and intuitive design.',
            gradient: 'from-purple-600 to-pink-600',
            delay: 0.2
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Your thoughts are safe with us. Cloud-based storage ensures your notes are always accessible and never lost.',
            gradient: 'from-emerald-600 to-teal-600',
            delay: 0.3
        }
    ];

    const iconVariants = {
        hover: {
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                animate={{
                    y: [0, 50, 0],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                animate={{
                    y: [0, -50, 0],
                    x: [0, -30, 0],
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
                        Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Thinkboard</span>?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A powerful note-taking experience designed for modern thinkers
                    </p>
                </motion.div>

                {/* Features - Alternating Layout */}
                <div className="space-y-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: feature.delay }}
                            >
                                {/* Icon Side */}
                                <motion.div
                                    className="flex-shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className={`relative w-48 h-48 rounded-2xl bg-gradient-to-br ${feature.gradient} p-1 shadow-2xl`}>
                                        <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                                            <motion.div
                                                variants={iconVariants}
                                                whileHover="hover"
                                            >
                                                <Icon className="w-20 h-20 text-white" />
                                            </motion.div>
                                        </div>
                                        {/* Glow Effect */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-50 -z-10`}></div>
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <motion.div
                                    className="flex-1 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                                    whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutApp;
