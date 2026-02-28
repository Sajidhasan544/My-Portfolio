import React from 'react';
import { motion } from 'framer-motion';
import profile from "../assets/sajid.png"; // আপনার প্রোফাইল ইমেজ

const Aboutme = () => {
    // Animation Variants - More Smooth
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99] // Custom easing for smoothness
            }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.9,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const skills = [
        { name: 'React.js', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Python', level: 80, color: 'from-blue-400 to-indigo-600' },
        { name: 'MongoDB', level: 85, color: 'from-green-400 to-emerald-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-blue-600' },
    ];

    const experiences = [
        {
            year: '2023 - Present',
            title: 'Senior Full Stack Developer',
            company: 'Tech Solutions Inc.',
            description: 'Leading development of enterprise web applications using React and Node.js.'
        },
        {
            year: '2021 - 2023',
            title: 'Frontend Developer',
            company: 'Creative Agency',
            description: 'Developed responsive user interfaces for client projects.'
        },
        {
            year: '2019 - 2021',
            title: 'Junior Developer',
            company: 'StartUp Hub',
            description: 'Worked on various web development projects and learned modern technologies.'
        }
    ];

    const education = [
        {
            degree: 'B.Sc in Computer Science',
            institution: 'University of Technology',
            year: '2015 - 2019',
            grade: 'CGPA: 3.8/4.0'
        },
        {
            degree: 'Higher Secondary Certificate',
            institution: 'Science College',
            year: '2013 - 2015',
            grade: 'GPA: 5.00'
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#0a0014] via-[#140028] to-[#0a0014] pt-24 pb-16">
            
            {/* Animated Background Elements - Smoother */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 25, 0],
                        y: [0, -25, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px]"
                ></motion.div>
                
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -25, 0],
                        y: [0, 25, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-[120px]"
                ></motion.div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Floating Particles - Smoother */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
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
                            duration: 8 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                        className="absolute w-1 h-1 bg-purple-300/30 rounded-full"
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                
                {/* Header Section - Smoother */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1,
                        ease: [0.6, -0.05, 0.01, 0.99]
                    }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            About Me
                        </span>
                    </h1>
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
                    ></motion.div>
                </motion.div>

                {/* Profile & Bio Section */}
                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    {/* Profile Image */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.4, 0.7, 0.4],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 blur-[60px] opacity-40"
                            ></motion.div>
                            <motion.div
                                animate={{ 
                                    y: [0, -12, 0],
                                }}
                                transition={{ 
                                    duration: 5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src={profile}
                                    alt="Sajid"
                                    className="relative w-[250px] h-[250px] object-cover rounded-full border-4 border-purple-500 shadow-2xl"
                                />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ 
                                    duration: 15, 
                                    repeat: Infinity, 
                                    ease: "linear"
                                }}
                                className="absolute -inset-3 rounded-full border border-dashed border-purple-400/30"
                            ></motion.div>
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="md:col-span-2"
                    >
                        <motion.h2 
                            variants={fadeInUp}
                            className="text-3xl font-bold text-white mb-4"
                        >
                            MD Sajid Hasan
                        </motion.h2>
                        <motion.p 
                            variants={fadeInUp}
                            className="text-xl text-purple-400 mb-6"
                        >
                            Full Stack Developer with 5+ years of experience
                        </motion.p>
                        <motion.div 
                            variants={staggerContainer}
                            className="space-y-4 text-gray-300"
                        >
                            <motion.p variants={fadeInUp} className="leading-relaxed">
                                I'm a passionate full-stack developer who loves building amazing web applications. 
                                With expertise in React, Node.js, and modern web technologies, I help businesses 
                                transform their ideas into reality.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="leading-relaxed">
                                I believe in writing clean, maintainable code and creating user-friendly experiences. 
                                When I'm not coding, you can find me exploring new technologies or contributing to 
                                open-source projects.
                            </motion.p>
                        </motion.div>

                        {/* Quick Info */}
                        <motion.div 
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4 mt-8"
                        >
                            {[
                                { label: 'Location', value: 'Dhaka, Bangladesh', color: 'purple' },
                                { label: 'Experience', value: '5+ Years', color: 'pink' },
                                { label: 'Projects', value: '50+ Completed', color: 'blue' },
                                { label: 'Availability', value: 'Full Time', color: 'green' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
                                >
                                    <p className={`text-${item.color}-400 font-semibold`}>{item.label}</p>
                                    <p className="text-white">{item.value}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-20"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-8 text-center">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Skills</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03, y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
                            >
                                <h3 className="text-white font-semibold mb-3">{skill.name}</h3>
                                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                                    ></motion.div>
                                </div>
                                <motion.span 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="text-sm text-gray-400"
                                >
                                    {skill.level}%
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience & Education Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Experience Section */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6 flex items-center">
                            <motion.span 
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="mr-2"
                            >💼</motion.span> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Experience</span>
                        </motion.h2>

                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ x: 8 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
                                >
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-purple-400 text-sm mb-2"
                                    >
                                        {exp.year}
                                    </motion.p>
                                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                                    <p className="text-gray-400 mb-2">{exp.company}</p>
                                    <p className="text-gray-300 text-sm">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Section */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-6 flex items-center">
                            <motion.span 
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="mr-2"
                            >🎓</motion.span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Education</span>
                        </motion.h2>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ x: 8 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
                                >
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-purple-400 text-sm mb-2"
                                    >
                                        {edu.year}
                                    </motion.p>
                                    <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                                    <p className="text-gray-300 text-sm">{edu.grade}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group"
                    >
                        <span className="relative z-10">Let's Work Together</span>
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                    </motion.button>
                </motion.div>

            </div>
        </div>
    );
};

export default Aboutme;