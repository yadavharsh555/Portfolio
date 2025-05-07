"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-4"
        >
          <p className="text-yellow-400 text-lg">HELLO!</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            I'm <span className="text-yellow-400">Harsh Yadav</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl">
            A Passionate Python & Full-Stack Developer crafting modern web applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
            >
              HIRE ME
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="border border-white text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
            >
              MY WORKS
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl pt-6">
            <a
              href="https://github.com/yadavharsh555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-yadav-8a1366266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/profile.jpg"
            alt="Harsh Yadav"
            width={350}
            height={350}
            className="rounded-full border-4 border-gray-700 shadow-xl object-cover hidden md:block"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
