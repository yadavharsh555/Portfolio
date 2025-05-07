"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-md shadow-lg px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-400 tracking-wide">
          HARSH
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="#resume" className="hover:text-yellow-400 transition-colors duration-300">Resume</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
