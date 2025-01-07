import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import './App.css';

function App() {
  useEffect(() => {
    // GSAP animations for smooth transitions
    gsap.from(".navbar", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero", { opacity: 0, scale: 0.95, duration: 1.5 });
    gsap.from(".about, .skills, .projects, .contact, footer", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;