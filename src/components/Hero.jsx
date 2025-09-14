// src/components/Hero.jsx
import React from "react";
import profilePic from '../assets/images/profile.jpg'

export default function Hero() {
  return (
    <>
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Manas Patel"
        className="w-64 h-48 rounded-full object-cover"
      />
      
      {/* Intro */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Hi, I'm Manas!
      </h1>
      <p className="text-lg md:text-2xl text-center max-w-xl mb-6">
        I'm a computer science student passionate about web development, game development, and AI.
      </p>
      
      {/* Call-to-action button */}
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition"
      >
        View My Projects
      </a>
    </section>
    </>
  );
}
