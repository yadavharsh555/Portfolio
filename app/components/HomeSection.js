"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl min-h-screen pt-24 px-6 mx-auto"
    >
      {/* Left Side Content */}
      <motion.div
        className="text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-yellow-400 text-lg">HELLO!</p>
        <h1 className="text-5xl font-bold">
          I'm <span className="text-yellow-400">Harsh Yadav</span>
        </h1>
        <p className="text-gray-400 text-lg mt-2">A Python & Web Developer</p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded shadow-lg cursor-pointer"
          >
            HIRE ME
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            className="border border-white text-white font-bold py-2 px-4 rounded shadow-lg cursor-pointer"
          >
            MY WORKS
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-4 text-2xl">
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

      {/* Profile Image */}
      <motion.div
        className="mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/profile.jpg"
          alt="Harsh Yadav"
          width={400}
          height={400}
          className="rounded-full border-4 border-gray-600 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HomeSection;
