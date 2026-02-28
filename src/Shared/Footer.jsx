import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: '📱', name: 'GitHub', url: '#' },
        { icon: '💼', name: 'LinkedIn', url: '#' },
        { icon: '🐦', name: 'Twitter', url: '#' },
    ];

    return (
        <footer className="bg-[#0a0014] border-t border-purple-500/20 py-8">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-6">
                    
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
                            MD Sajid Hasan
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Full Stack Developer creating amazing web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-purple-400 text-sm transition"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-3">Contact</h4>
                        <p className="text-gray-400 text-sm mb-2">sajid.hasan@example.com</p>
                        <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                        
                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="text-gray-400 hover:text-purple-400 text-xl transition"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} MD Sajid Hasan. All rights reserved.
                    </p>
                    
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-purple-400 text-xs transition">
                            Privacy
                        </Link>
                        <Link to="/terms" className="text-gray-500 hover:text-purple-400 text-xs transition">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;