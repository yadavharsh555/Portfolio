"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <motion.section 
      id="projects" 
      className="min-h-screen flex flex-col items-center justify-center p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Projects</h1>
      <ul className="mt-6">
        {[
          {
            title: "🚀 FarmConnect",
            description: "A platform connecting farmers and buyers.",
            tech: "HTML, Tailwind CSS, JavaScript, Express.js, Node.js, MongoDB",
            link: "https://github.com/yadavharsh555/farmconnect"
          },
          {
            title: "🔗 QR Code Generator",
            description: "Built using Flask and Python to generate scannable QR codes.",
            tech: "Python, Flask, HTML, CSS",
            link: "https://github.com/yadavharsh555/qr-code-generator"
          },
          {
            title: "🔐 Password Manager",
            description: "A secure web app for storing and managing passwords.",
            tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
            link: "https://github.com/yadavharsh555/password-manager"
          },
          {
            title: "📸 Google Image Scraper",
            description: "Scrapes and displays images from Google.",
            tech: "Python, BeautifulSoup, Selenium",
            link: "https://github.com/yadavharsh555/image-scraper"
          }

        ].map((project, index) => (
          <motion.li 
            key={index} 
            className="text-lg text-yellow-400 mt-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {project.title} - {project.description}
            <p className="text-white text-sm">Tech Stack: {project.tech}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400 flex items-center gap-2 mt-1"
            >
              <FaGithub className="text-xl" /> GitHub Repository
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}