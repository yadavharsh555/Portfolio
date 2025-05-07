"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-10"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="text-lg text-gray-400 mt-4 max-w-2xl text-center">
        I am <span className="text-yellow-400">Harsh Yadav</span>, a dedicated <strong>Python Developer</strong> with a passion for building web applications, solving problems, and continuously expanding my technical skill set.
      </p>

      {/* Career Objective */}
      <motion.p 
        className="text-md text-gray-300 mt-6 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        My goal is to leverage my skills in <strong>full-stack development, web scraping, and automation</strong> to contribute to innovative projects. I'm eager to work in dynamic environments where I can grow and make meaningful impacts.
      </motion.p>

      {/* Skills & Technology */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-yellow-400">Skills & Technology</h2>
        <div className="text-gray-300 mt-4 space-y-1">
          <p><strong>Languages:</strong> Python, JavaScript, C, HTML, CSS</p>
          <p><strong>Core Concepts:</strong> Data Structures & Algorithms (Python)</p>
          <p><strong>Frameworks & Libraries:</strong> React.js, Next.js, Express.js, Node.js, Tailwind CSS, Basic Django, Basic Flask, Matplotlib, Numpy</p>
          <p><strong>Databases:</strong> MongoDB, Basic SQL, DBMS</p>
          <p><strong>Tools & Platforms:</strong> GitHub, VS Code, Jupyter Notebook, Basic Excel</p>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-yellow-400">Education</h2>
        <p className="text-gray-300 mt-4">🎓 <strong>LNCT University, Bhopal</strong> — B.Tech in Computer Science (2022 - 2026) | CGPA: <strong>7.45</strong></p>
        <p className="text-gray-300">🏫 <strong>Sharda Vidhya Mandir H.S. School, Nasrullaganj</strong> (2021 - 2022) | <strong>80.6%</strong></p>
        <p className="text-gray-300">🏫 <strong>Govt. H.S. School, Balagaon</strong> (2019 - 2020) | <strong>82.25%</strong></p>
      </motion.div>

      {/* Certifications */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h2 className="text-3xl font-semibold text-yellow-400">Certifications</h2>
        <p className="text-gray-300 mt-4">📜 Python Full Stack – Eduskills</p>
        <p className="text-gray-300">📜 Basics of Python – Infosys Springboard</p>
        <p className="text-gray-300">📜 Python Course: Basic to Advanced – Udemy (2025)</p>
        <p className="text-gray-300">📜 Data Analytics Job Simulation – Deloitte</p>
      </motion.div>

    
    </motion.section>
  );
}
