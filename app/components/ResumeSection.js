"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <motion.section 
      id="resume" 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-10 gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Side - Resume Display */}
      <motion.iframe 
        src="/resume.pdf" 
        className="w-full md:w-1/2 h-[600px] border-2 border-gray-700 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Right Side - Download Button */}
      <div className="flex flex-col items-center text-center md:w-1/3">
        <h1 className="text-5xl font-bold">Resume</h1>
        <p className="text-lg text-gray-400 mt-4">View or download my full resume.</p>
        <a 
          href="/resume.pdf" 
          download 
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
}
