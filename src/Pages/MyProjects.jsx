import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MyProjects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Project Categories
    const categories = [
        { id: 'all', name: 'All Projects', icon: '🔮' },
        { id: 'frontend', name: 'Frontend', icon: '🎨' },
        { id: 'backend', name: 'Backend', icon: '⚙️' },
        { id: 'fullstack', name: 'Full Stack', icon: '🚀' },
        { id: 'mobile', name: 'Mobile', icon: '📱' },
    ];

    // Projects Data
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with product management, cart, payment gateway, and admin dashboard.',
            longDescription: 'Built a complete e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product search, filtering, shopping cart, payment integration, order management, and admin panel.',
            category: 'fullstack',
            image: 'https://via.placeholder.com/600x400/140028/ffffff?text=E-Commerce',
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
            features: [
                'User Authentication & Authorization',
                'Product Management System',
                'Shopping Cart & Checkout',
                'Payment Gateway Integration',
                'Admin Dashboard',
                'Order Tracking System'
            ],
            github: 'https://github.com/yourusername/ecommerce',
            live: 'https://ecommerce-demo.com',
            color: 'from-pink-500 to-purple-600'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, team features, and progress tracking.',
            longDescription: 'A Trello-like application built with Next.js and Socket.io for real-time collaboration. Includes drag-and-drop functionality, team workspaces, task assignments, due dates, and progress tracking.',
            category: 'fullstack',
            image: 'https://via.placeholder.com/600x400/140028/ffffff?text=Task+App',
            tech: ['Next.js', 'Socket.io', 'Tailwind', 'Prisma', 'PostgreSQL', 'TypeScript'],
            features: [
                'Real-time Updates',
                'Drag & Drop Interface',
                'Team Collaboration',
                'Task Assignment',
                'Due Date Tracking',
                'Progress Analytics'
            ],
            github: 'https://github.com/yourusername/taskmanager',
            live: 'https://taskmanager-demo.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 3,
            title: 'AI Content Generator',
            description: 'AI-powered content generation platform using OpenAI API for blog posts, social media, and marketing copy.',
            longDescription: 'Developed a content generation tool that uses OpenAI\'s GPT-3 API to create various types of content. Users can generate blog posts, social media captions, product descriptions, and more with customizable parameters.',
            category: 'fullstack',
            image: 'https://via.placeholder.com/600x400/140028/ffffff?text=AI+Generator',
            tech: ['React', 'OpenAI', 'Express', 'MongoDB', 'Tailwind CSS'],
            features: [
                'Multiple Content Templates',
                'Customizable Parameters',
                'History Tracking',
                'Save & Export Options',
                'User Dashboard',
                'API Integration'
            ],
            github: 'https://github.com/yourusername/aigenerator',
            live: 'https://aigenerator-demo.com',
            color: 'from-purple-500 to-indigo-600'
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            description: 'Beautiful weather application with real-time data, 5-day forecast, and interactive maps.',
            longDescription: 'A weather application that provides real-time weather data using OpenWeatherMap API. Features include current weather, hourly forecast, 5-day forecast, interactive maps, and location search.',
            category: 'frontend',
            image: 'https://via.placeholder.com/600x400/140028/ffffff?text=Weather+App',
            tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
            features: [
                'Real-time Weather Data',
                '5-day Forecast',
                'Location Search',
                'Interactive Maps',
                'Weather Charts',
                'Dark/Light Mode'
            ],
            github: 'https://github.com/yourusername/weather',
            live: 'https://weather-demo.com',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            id: 5,
            title: 'Social Media API',
            description: 'RESTful API for social media platform with authentication, posts, comments, and friend requests.',
            longDescription: 'Built a comprehensive REST API for a social media platform using Node.js and Express. Features include JWT authentication, user profiles, posts, comments, likes, friend requests, and real-time notifications.',
            category: 'backend',
            image: 'https://via.placeholder.com/600x400/140028/ffffff?text=Social+API',
            tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'Redis'],
            features: [
                'JWT Authentication',
                'User Profiles',
                'Posts & Comments',
                'Friend System',
                'Real-time Notifications',
                'Rate Limiting'
            ],
            github: 'https://github.com/yourusername/socialapi',
            live: 'https://api-demo.com',
            color: 'from-green-500 to-emerald-600'
        },
        {
            id: 6,
            title: 'Portfolio Website',
            description: 'Modern portfolio website with smooth animations, dark theme, and responsive design.',
            longDescription: 'Designed and developed a personal portfolio website using React and Tailwind CSS. Features include smooth animations, dark theme, responsive design, and project showcase.',
            category: 'frontend',
            image: 'https://via.placeholder.com/600x400/140028/ffffff?text=Portfolio',
            tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
            features: [
                'Smooth Animations',
                'Dark Theme',
                'Responsive Design',
                'Project Gallery',
                'Contact Form',
                'Performance Optimized'
            ],
            github: 'https://github.com/yourusername/portfolio',
            live: 'https://yourportfolio.com',
            color: 'from-pink-500 to-purple-500'
        }
    ];

    // Filter Projects
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#0a0014] via-[#140028] to-[#0a0014] pt-24 pb-16">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[120px]"
                ></motion.div>
                
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[150px]"
                ></motion.div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ 
                            top: `${Math.random() * 100}%`, 
                            left: `${Math.random() * 100}%`,
                            opacity: 0.1 + Math.random() * 0.2
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        className="absolute w-1 h-1 bg-purple-300/30 rounded-full"
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            My Projects
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Here are some of my recent projects. Each project represents my passion for creating elegant solutions.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-4"></div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.id}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(cat.id)}
                            className={`px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ${
                                filter === cat.id
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-purple-500/20'
                            }`}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                layout
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
                            >
                                {/* Project Image */}
                                <div className={`h-48 bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                                            {project.category === 'frontend' && '🎨'}
                                            {project.category === 'backend' && '⚙️'}
                                            {project.category === 'fullstack' && '🚀'}
                                            {project.category === 'mobile' && '📱'}
                                        </span>
                                    </motion.div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-pink-400 to-purple-400 transition-all">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/30">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-3 py-2 bg-white/5 text-gray-300 rounded-lg text-sm text-center hover:bg-white/10 hover:text-white transition-all border border-purple-500/20"
                                        >
                                            GitHub
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg text-sm text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                                        >
                                            Live Demo
                                        </motion.a>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedProject(project)}
                                            className="px-3 py-2 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all border border-purple-500/20"
                                        >
                                            📋
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Count */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-center mt-12 text-gray-400"
                >
                    Showing {filteredProjects.length} of {projects.length} projects
                </motion.div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>
                        
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative bg-gradient-to-br from-[#1a0028] to-[#0a0014] rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto border border-purple-500/30 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className={`h-32 bg-gradient-to-r ${selectedProject.color} p-6 relative`}>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                >
                                    ✕
                                </button>
                                <h2 className="text-3xl font-bold text-white mt-8">{selectedProject.title}</h2>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {selectedProject.longDescription}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {selectedProject.features.map((feature, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex items-center">
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-purple-900/30 text-purple-300 rounded-lg text-sm border border-purple-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-3 bg-white/5 text-gray-300 rounded-xl text-center hover:bg-white/10 hover:text-white transition-all border border-purple-500/20"
                                    >
                                        View on GitHub
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                                    >
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MyProjects;