// src/components/Projects.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import animal from '../assets/images/animal.png';
import robotic from '../assets/images/robotics-logo.png';
import controller from '../assets/images/controller.png';

const projectData = [
  {
    title: "CRC Robotics Website",
    description: "Team site for the robotics competition.",
    link: "/robotics",
    image: robotic,
    //path to robotics site "https://vanopoly.crcrobotics.com/en/Home/"
  },
  {
    title: "Animal Adoption Site",
    description: "Site built with PHP to adopt animals.",
    link: "http://hoviragallatmentes.com/",
    image: animal,
  },
  {
    title: "Games",
    description: "Games made with various game engines",
    link: "/games",
    image: controller,
  },
  // Add more projects here...
];

export default function Projects() {
  const projects = [
    {
      title: "RoboFlora",
      desc: "A 3D low poly game about a robot restoring a polluted world.",
    },
    {
      title: "Portfolio Website",
      desc: "A clean personal portfolio built with React & Tailwind.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="project-card bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
