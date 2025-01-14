import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50 py-4">
      <div className="container mx-auto flex justify-between">
        <Link to="hero" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">About</Link>
        <Link to="skills" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
