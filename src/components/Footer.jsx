// src/components/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Manas Patel. All rights reserved.</p>
      </div>
    </footer>
  );
}
