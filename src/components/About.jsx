// src/components/About.jsx

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
      AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

  return (
      <section
        id="about"
        className="py-20 bg-gray-50 text-dark"
        data-aos="fade-up"
      >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-down">
          About Me
        </h2>
        <p className="text-lg text-gray-700" data-aos="fade-up" data-aos-delay="200">
          I have a passion for{" "}
          <span className="font-semibold">game development</span>,{" "}
          <span className="font-semibold">AI</span> and{" "}
          <span className="font-semibold">web development</span>. I enjoy
          building interactive projects that combine creativity and technology.
          I enjoy self-improvement and I try to do something productive everyday to achieve my goals.
          Some of my favorite activities are reading books, bouldering, calisthenics and eating good food :)
        </p>
      </div>
  </section>
  );
}
