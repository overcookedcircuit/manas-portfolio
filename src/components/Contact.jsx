// src/components/Contact.jsx

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700">
        Want to work together? Reach out:
      </p>
      <ul className="mt-4 space-y-2">
        <li>Email: <a href="mailto:manaspatel31122004@gmail.com" className="text-blue-600">manaspatel31122004@gmail.com</a></li>
        <li>LinkedIn: <a href="www.linkedin.com/in/manas-patel-0b7714296" target="_blank" className="text-blue-600">LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/overcookedcircuit" target="_blank" className="text-blue-600">overcookedcircuit</a></li>
      </ul>
      </div>
    </section>
  );
}
