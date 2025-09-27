// src/components/Hero.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../assets/images/profile.jpg";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center
                 bg-gradient-to-br from-blue-500 to-blue-900 text-white px-4"
    >
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Manas Patel"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 shadow-lg border-4 border-white"
        data-aos="fade-up"
      />

      {/* Intro */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-4"
        data-aos="fade-up"
      >
        Hi, I'm Manas Patel
      </h1>
      <p
        className="text-lg md:text-2xl mb-6 max-w-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I'm a computer science student passionate about{" "}
        <span className="font-semibold">web development</span>,{" "}
        <span className="font-semibold">game development</span> and{" "}
        <span className="font-semibold">AI</span>.
      </p>

      {/* Call-to-action button */}
      <a
        href="#projects"
        className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold
                   hover:bg-gray-200 transition"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        View My Work
      </a>
    </section>
  );
}
