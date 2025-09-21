// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <>
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Manas Patel</a>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
    </>
  );
}
