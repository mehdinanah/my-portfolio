import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

import profile from "../assets/profile.jpg";
import plane from "../assets/plane.png";
import starsBg from "../assets/starsBg.png";
import reactIcon from "../assets/react-icon.svg.png";
import javascriptIcon from "../assets/javascript.png";
import tailwindIcon from "../assets/tailwind-icon.svg.png";
import htmlIcon from "../assets/html5.png";
import cssIcon from "../assets/CSS3.png";
import scssIcon from "../assets/Sass.png";

const fullName = "Mehdi Deryi";
const typingSpeed = 150;
const deletingSpeed = 80;

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= fullName.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    }

    if (index === fullName.length + 1) {
      setTimeout(() => setIsDeleting(true), 1000);
    }

    if (index === -1) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-10"
    >
      
      <img
        src={starsBg}
        alt="stars background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      
      <motion.img
        src={plane}
        alt="Flying plane"
        className="absolute top-20 left-[-100px] w-[900px] opacity-50 z-10"
        animate={{ x: [-400, 1400], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      
      <div className="relative z-20 backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          <div className="flex flex-col items-center gap-6 md:w-1/3">
            <motion.img
              src={profile}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="flex flex-col items-center gap-3">
              <a
                href="https://instagram.com/mehdideryi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-300 hover:text-white transition"
              >
                <FaInstagram className="text-2xl" />
                @mehdideryi
              </a>

              <a
                href="https://github.com/mehdinanah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition mr-11"
              >
                <IoLogoGithub className="text-2xl" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mehdideryi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-white transition mr-8"
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </a>
            </div>
          </div>

        
          <div className="flex flex-col md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold">
              <span className="text-yellow-300">
                Hey, I'm <span className="border-r-2 border-yellow-300 animate-pulse">{displayText}</span>
              </span>
            </h1>

            <motion.p
              className="mt-2 text-lg text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Frontend Software Developer
            </motion.p>

            <p className="text-white mt-3">
              Passionate about clean code, creative UI/UX, and building fast, responsive websites with modern tools like React and Tailwind CSS.
            </p>
            <p className="text-white mt-1">🏠 Casablanca, Maroc</p>

            
            <div className="mt-10">
              <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-6">
                Tech Stack
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {[["React", reactIcon],
                  ["JavaScript", javascriptIcon],
                  ["Tailwind", tailwindIcon],
                  ["HTML", htmlIcon],
                  ["CSS", cssIcon],
                  ["SCSS", scssIcon]].map(([label, icon]) => (
                  <button
                    key={label}
                    type="button"
                    className="border border-white/20 hover:bg-white/10 hover:text-white transition-all rounded-lg p-3 flex flex-col items-center justify-center gap-2 text-white/80"
                  >
                    <img
                      alt={`icon-${label}`}
                      loading="lazy"
                      width="32"
                      height="32"
                      className="transition-transform duration-300 group-hover:-translate-y-1"
                      src={icon}
                    />
                    <p className="text-sm">{label}</p>
                  </button>
                ))}
              </div>
            </div>

          
            <div className="mt-12">
              <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-6">
                Work Experience
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <p className="text-gray-400 sm:w-32">2025</p>
                  <div>
                    <p className="text-white text-lg font-semibold">Frontend Software Developer</p>
                    <p className="text-gray-400 mb-2">
                      Ocean ThinkIT • Full-time <span className="hidden sm:inline"> • (2025)</span>
                    </p>
                    <p className="text-gray-400">
                      Built and managed frontend systems from scratch using modern technologies.

                      Developed AI-powered interview platforms and specialized job boards.

                      Collaborated with cross-functional teams to ensure seamless integration and excellent user experience.

                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
