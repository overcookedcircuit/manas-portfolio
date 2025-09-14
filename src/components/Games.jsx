// src/components/Games.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import vid1 from "../assets/videos/greenfoot.mp4";
import vid2 from "../assets/videos/greenfoot2.mp4";
import vid3 from "../assets/videos/roboflora1.mp4";
import vid4 from "../assets/videos/roboflora2.mp4";

const gamesData = [
  {
    title: "Grazing Wombat",
    description: "Boss fight from Grazing Wombat",
    video: vid1,
  },
  {
    title: "Grazing Wombat",
    description: "Final boss fight from Grazing Wombat",
    video: vid2,
  },
  {
    title: "Roboflora",
    description: "3D Open world game",
    video: vid3,
  },
  {
    title: "Roboflora",
    description: "Final boss fight of Roboflora",
    video: vid4,
  },
];

export default function Games() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-0">
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ← Back to Projects
        </button>

        <h2 className="text-3xl font-bold mb-6">Games I've created with incredible teammates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {gamesData.map((game, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <video
                controls
                src={game.video}
                className="w-full rounded"
              ></video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
