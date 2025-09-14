import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Games from "./components/Games";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans text-gray-900">
        <Navbar />
        <main className="pt-20"> {/* pt-20 to offset fixed navbar */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App
