"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 fixed top-0 bg-black shadow-md z-50">
      <h1 className="text-2xl font-bold">HARSH</h1>
      <ul className="flex space-x-6 text-lg">
        <li><a href="#home" className="hover:text-yellow-400 active:text-yellow-500">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400 active:text-yellow-500">About</a></li>
        <li><a href="#resume" className="hover:text-yellow-400 active:text-yellow-500">Resume</a></li>
        <li><a href="#projects" className="hover:text-yellow-400 active:text-yellow-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 active:text-yellow-500">Contact</a></li>
      </ul>
    </nav>
  );
}
