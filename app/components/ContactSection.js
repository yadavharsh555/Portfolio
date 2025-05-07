"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="text-lg text-gray-400 mt-4">Feel free to reach out to me through any of the following channels:</p>

      <div className="mt-6 space-y-4 text-center">
        <p className="flex items-center gap-3 text-lg text-white">
          <FaPhone className="text-yellow-400" />
          <FaWhatsapp className="text-green-500" />
          +91 7389886205
        </p>
        <p className="flex items-center gap-2 text-lg text-white"><FaEnvelope className="text-yellow-400" /> yadavharsh9575@gmail.com</p>
        <p className="flex items-center gap-2 text-lg text-white"><FaMapMarkerAlt className="text-yellow-400" /> Bhopal, Madhya Pradesh</p>
      </div>

      <div className="mt-6 flex space-x-6 text-3xl">
        <a href="https://www.linkedin.com/in/harsh-yadav-8a1366266" target="_blank" className="text-white hover:text-yellow-400"><FaLinkedin /></a>
        <a href="https://github.com/yadavharsh555" target="_blank" className="text-white hover:text-yellow-400"><FaGithub /></a>
      </div>

    </motion.section>
  );
}