"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-10 "
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="text-lg text-gray-400 mt-4 max-w-2xl text-center">
        I am <span className="text-yellow-400">Harsh Yadav</span>, a passionate **MERN Stack & Python Developer**.
      </p>
      
      {/* Career Objective */}
      <motion.p 
        className="text-md text-gray-300 mt-6 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        My goal is to leverage my expertise in **full-stack development, web scraping, and API integration** to create impactful solutions. 
        I am eager to work in an environment that fosters learning and innovation.
      </motion.p>

      {/* Skills & Technology Stack */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-yellow-400">Skills & Technology</h2>
        <p className="text-gray-300 mt-4">Python, JavaScript, C, React.js, Next.js, Express.js, MongoDB, Flask</p>
      </motion.div>

      {/* Education Details */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-yellow-400">Education</h2>
        <p className="text-gray-300 mt-4">🎓 **LNCT University, Bhopal** - B.Tech in Computer Science (2022 - 2026) - CGPA: **7.52**</p>
        <p className="text-gray-300">🏫 **Sharda Vidhya Mandir H.S. School** (2021 - 2022) - **80.6%**</p>
      </motion.div>

      {/* Certifications */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h2 className="text-3xl font-semibold text-yellow-400">Certifications</h2>
        <p className="text-gray-300 mt-4">📜 Python Full Stack - Eduskills</p>
        <p className="text-gray-300">📜 Basics of Python - Infosys Springboard</p>
      </motion.div>
    </motion.section>
  );
}
