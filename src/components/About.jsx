// src/components/About.jsx

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a student in Computer Science & Technology at Vanier College, passionate about building web applications, game dev, and robotics. 
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <li className="bg-gray-100 p-3 rounded">React</li>
            <li className="bg-gray-100 p-3 rounded">JavaScript</li>
            <li className="bg-gray-100 p-3 rounded">PHP / MySQL</li>
            <li className="bg-gray-100 p-3 rounded">Unity / C#</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
