import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect';

function Hero() {
  useEffect(() => {
    gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <header className="hero min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl mb-4 font-bold">
        Hi, I'm <span className="text-blue-400">Sujith Nekkanti</span>
      </h1>
      <p className="text-2xl mb-6">
        <Typewriter
          options={{
            strings: ['Cloud Specialist', 'DevOps Engineer', 'Tech Enthusiast'],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <a
        href="#about"
        className="btn-primary px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Learn More
      </a>
    </header>
  );
}

export default Hero;
