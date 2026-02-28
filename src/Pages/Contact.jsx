import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1500);
    };

    // Contact Info Cards
    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'sajid.hasan@example.com',
            link: 'mailto:sajid.hasan@example.com',
            color: 'from-pink-500 to-purple-500'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+880 1234 567890',
            link: 'tel:+8801234567890',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Dhaka, Bangladesh',
            link: 'https://maps.google.com/?q=Dhaka,Bangladesh',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: '💼',
            title: 'Freelance',
            value: 'Available for work',
            link: null,
            color: 'from-green-500 to-emerald-500'
        }
    ];

    // Social Links
    const socialLinks = [
        { name: 'GitHub', icon: '💻', url: 'https://github.com/yourusername', color: 'hover:bg-gray-800' },
        { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com/in/yourusername', color: 'hover:bg-blue-600' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername', color: 'hover:bg-blue-400' },
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com/yourusername', color: 'hover:bg-pink-600' },
        { name: 'Facebook', icon: '👤', url: 'https://facebook.com/yourusername', color: 'hover:bg-blue-700' },
        { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/yourusername', color: 'hover:bg-red-600' },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#0a0014] via-[#140028] to-[#0a0014] pt-24 pb-16">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 40, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[150px]"
                ></motion.div>
                
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[180px]"
                ></motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]"
                ></motion.div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ 
                            top: `${Math.random() * 100}%`, 
                            left: `${Math.random() * 100}%`,
                            opacity: 0.1 + Math.random() * 0.2
                        }}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, Math.random() * 40 - 20, 0],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 4
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
                            Get In Touch
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind? Let's work together to create something amazing.
                        I'm always open to new opportunities and collaborations.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-4"></div>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                        >
                            {info.link ? (
                                <a href={info.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                                        {info.icon}
                                    </div>
                                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                                    <p className="text-gray-400 text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-pink-400 to-purple-400">
                                        {info.value}
                                    </p>
                                </a>
                            ) : (
                                <>
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-2xl mb-3`}>
                                        {info.icon}
                                    </div>
                                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                                    <p className="text-gray-400 text-sm">{info.value}</p>
                                </>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form & Map Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                    
                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Send Me a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Message</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-gray-400 mb-2 text-sm">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold relative overflow-hidden group ${
                                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                            >
                                <span className="relative z-10">
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                                >
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Map & Social Section */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Map */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 h-[300px] overflow-hidden">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Find Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Here</span>
                            </h3>
                            <div className="w-full h-[200px] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center border border-purple-500/20">
                                <div className="text-center">
                                    <span className="text-4xl mb-2 block">📍</span>
                                    <p className="text-gray-400">Dhaka, Bangladesh</p>
                                    <p className="text-sm text-gray-500">Google Maps Integration</p>
                                </div>
                                {/* Real Google Maps embed code here */}
                                {/* <iframe src="your-google-maps-embed-url" className="w-full h-full" /> */}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Me</span>
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Follow me on social media for updates and insights
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className={`p-4 bg-white/5 rounded-xl text-center group transition-all duration-300 hover:bg-opacity-20 border border-purple-500/20 hover:border-purple-500/50 ${social.color}`}
                                    >
                                        <span className="text-2xl mb-1 block group-hover:scale-110 transition-transform">
                                            {social.icon}
                                        </span>
                                        <span className="text-xs text-gray-400 group-hover:text-white">
                                            {social.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Currently Available for Work</h4>
                                    <p className="text-gray-400 text-sm">I'm open to freelance projects and full-time opportunities</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* FAQ Section (Optional) */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400">
                        Prefer email? Reach me directly at{' '}
                        <a href="mailto:sajid.hasan@example.com" className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 hover:underline">
                            sajid.hasan@example.com
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;