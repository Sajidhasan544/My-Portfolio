import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0014]/80 backdrop-blur-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo with gradient */}
        <Link to="/" className="relative group">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold font-space tracking-tight">
            MD Sajid Hasan
          </span>
          {/* Underline effect on hover */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-gray-300 font-medium">
            <li>
              <Link 
                to="/" 
                className="relative group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="relative group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="relative group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {/* Resume Button */}
          <Link
            to="/resume"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;