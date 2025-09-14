// src/components/About.jsx
import React from 'react';

export default function About() {
  const skills = [
    "React", "Vite", "Vercel", "Tailwind", "Git", "GitHub",
    "HTML", "CSS", "JavaScript", "Node.js", "Python", "Streamlit",
    "SQL", "PHP", "Firebase", "MongoDB", "Arduino", "Embedded C",
    "Unity", "C#", "Unreal Engine 5", "Blueprints", "Java", "Linux"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a Computer Science & Technology student at Vanier College, passionate about web development, game dev, and robotics.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm text-sm hover:bg-blue-100 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
