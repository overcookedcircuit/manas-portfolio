// src/components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-light text-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          I have a passion for{" "}
          <span className="font-semibold">game development</span>,{" "}
          <span className="font-semibold">AI</span>, and{" "}
          <span className="font-semibold">web development</span>. I enjoy
          building interactive projects that combine creativity and technology.
          I enjoy self-improvement and I try to do something productive everyday to achieve my goals.
          Some of my favorite activities are reading books, bouldering, calisthenics and eating good food :)
        </p>
      </div>
    </section>
  );
}
