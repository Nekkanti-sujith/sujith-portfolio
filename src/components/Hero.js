import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Hero() {
  useEffect(() => {
    gsap.from('.hero h1', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.from('.hero p', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    });
    gsap.from('.btn-primary', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
      delay: 1,
    });
  }, []);

  return (
    <header className="hero bg-white flex flex-col justify-center items-center text-center py-20">
      <h1 className="text-4xl text-gray-900 mb-4">Hi, I'm <span className="text-blue-600">Sujith Nekkanti</span></h1>
      <p className="text-lg text-gray-600 mb-6">M.S. Computer Engineering | Cloud & DevOps Specialist</p>
      <a href="#about" className="btn-primary px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
        Learn More
      </a>
    </header>
  );
}

export default Hero;