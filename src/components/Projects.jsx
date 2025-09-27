// src/components/Projects.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import web from '../assets/images/webhttps.png';
import robotic from '../assets/images/robotics-logo.png';
import controller from '../assets/images/controller.png';


export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Games",
      desc: "Check out some amazing games I've built with incredible teammates.",
      link: "/games",
      image: controller,
    },
    {
      title: "Portfolio Website",
      desc: "A clean personal portfolio built with React & Tailwind. You're looking at it right now :)",
      link: "/portfolio",
      image: web,
    },
    {
      title: "Robotics",
      desc: "Check out the amazing robotics journey I went through with Vanier Robotics.",
      link: "/robotics",
      image: robotic,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              onClick={() => navigate(p.link)}
              className="project-card bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-contain mb-4 rounded-lg"
              />

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
