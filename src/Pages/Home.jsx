import React, { useEffect, useState } from "react";
import profile from "../assets/sajid.png"; // তোমার photo path
import { motion } from "framer-motion";
import Aboutme from "./Aboutme";
import MyProjects from "./MyProjects";
import Contact from "./Contact";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Typing Animation
  useEffect(() => {
    const texts = ["Full Stack Developer", "MERN Expert", "UI Enthusiast", "Problem Solver"];
    let i = 0;
    let j = 0;
    let currentText = "";
    let isDeleting = false;

    const type = () => {
      if (i < texts.length) {
        if (!isDeleting && j <= texts[i].length) {
          currentText = texts[i].slice(0, j);
          j++;
        }

        if (isDeleting && j <= texts[i].length) {
          currentText = texts[i].slice(0, j);
          j--;
        }

        if (j === texts[i].length) {
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          isDeleting = false;
          i++;
          if (i === texts.length) i = 0;
        }

        setTypedText(currentText);
      }
    };

    const timer = setTimeout(() => type(), isDeleting ? 100 : 200);
    return () => clearTimeout(timer);
  }, [typedText]);

  // Cursor Blink
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0014] via-[#140028] to-[#0a0014]">

      {/* Animated Glow blobs */}
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
        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-pink-600 rounded-full blur-[140px] opacity-30"
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
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-purple-700 rounded-full blur-[140px] opacity-30"
      ></motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-purple-300/50 rounded-full"
          />
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          {/* Left Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-white text-5xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm{' '}
              <motion.span
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_200%]"
              >
                Sajid
              </motion.span>
            </motion.h1>

            <motion.h2 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-2xl text-purple-400 mb-4 font-semibold flex items-center"
            >
              <span>{typedText}</span>
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                className="ml-1 inline-block w-0.5 h-6 bg-purple-400"
              />
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mb-6 max-w-lg leading-relaxed"
            >
              Crafting modern, responsive, and user-friendly websites with passion and precision.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-purple-500/30 relative overflow-hidden group"
            >
              <span className="relative z-10">Download Resume</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>

          {/* Right Side Image */}
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Animated Glow circle */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 blur-[80px] opacity-70"
              ></motion.div>

              {/* Floating animation for image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Image with border animation */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={profile}
                    alt="profile"
                    className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-purple-500"
                  />
                  
                  {/* Rotating border effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -inset-2 rounded-full border-2 border-dashed border-purple-400/30"
                  ></motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-purple-400 rounded-full mt-2"
          />
        </div>
      </motion.div> */}
      <Aboutme></Aboutme>
      <MyProjects></MyProjects>
      <Contact></Contact>

    </div>
  );
};

export default Home;