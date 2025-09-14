// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
    <a href="#" className="text-xl font-bold whitespace-nowrap">Manas Patel</a>
    <div className="flex flex-wrap gap-4">
      <a href="#about" className="hover:text-blue-500 whitespace-nowrap">About</a>
      <a href="#projects" className="hover:text-blue-500 whitespace-nowrap">Projects</a>
      <a href="#contact" className="hover:text-blue-500 whitespace-nowrap">Contact</a>
    </div>
  </div>
</nav>
  );
}
