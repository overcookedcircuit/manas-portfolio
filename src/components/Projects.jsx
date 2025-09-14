// src/components/Projects.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import crc from '../assets/images/CRC_2023-2024.jpg';

const projectData = [
  {
    title: "CRC Robotics Website",
    description: "Team site for the robotics competition.",
    link: "https://vanopoly.crcrobotics.com/en/Home/",
    image: crc,
  },
  {
    title: "Animal Adoption Site",
    description: "Site built with PHP to adopt animals.",
    link: "http://hoviragallatmentes.com/",
    image: "/path_to_screenshot2.png",
  },
  {
    title: "Games",
    description: "Games made with various game engines",
    link: "/games",
    image: "/path_to_screenshot2.png",
  },
  // Add more projects here...
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((proj, i) => {
            const isExternal = proj.link.startsWith('http');
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 cursor-pointer"
                onClick={() => !isExternal && navigate(proj.link)}
              >
                {proj.image && (
                  <img src={proj.image} alt={proj.title} className="rounded w-full mb-4" />
                )}
                <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-4">{proj.description}</p>
                {isExternal && (
                  <a
                    href={proj.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
