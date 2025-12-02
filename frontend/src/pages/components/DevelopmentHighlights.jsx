import { CheckCircle } from 'lucide-react';

const DevelopmentHighlights = () => {
    const highlights = [
        {
            title: 'Full CRUD Operations',
            description: 'Complete Create, Read, Update, Delete functionality for notes with real-time updates'
        },
        {
            title: 'RESTful API Architecture',
            description: 'Well-structured API endpoints following REST principles for scalability and maintainability'
        },
        {
            title: 'MongoDB Integration',
            description: 'NoSQL database with Mongoose ODM for flexible schema design and efficient data management'
        },
        {
            title: 'Modern React Patterns',
            description: 'Hooks, component composition, and React Router for a dynamic single-page application'
        },
        {
            title: 'Responsive Design',
            description: 'Mobile-first approach with Tailwind CSS ensuring perfect display across all devices'
        },
        {
            title: 'Gradient UI System',
            description: 'Consistent design language with purple-to-pink gradients, smooth animations, and hover effects'
        },
        {
            title: 'Error Handling',
            description: 'Comprehensive error handling with user-friendly toast notifications for better UX'
        },
        {
            title: 'Form Validation',
            description: 'Client-side validation ensuring data integrity before submission'
        }
    ];

    return (
        <section id="development" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Development <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Highlights</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Key features and technical achievements that make Thinkboard stand out
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                                    <p className="text-gray-400">{highlight.description}</p>
                                </div>
                            </div>
                            {/* Gradient Border Effect on Hover */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Want to see it in action?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl">
                            Experience the full functionality of Thinkboard by creating your own notes and exploring all the features.
                        </p>
                        <a
                            href="/app"
                            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-purple-500/50"
                        >
                            Try the App Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentHighlights;
