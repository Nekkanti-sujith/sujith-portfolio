import React from 'react';

function Navbar() {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-white bg-opacity-80 p-4 shadow-md z-50">
      <ul className="flex justify-between items-center">
        <li><a href="#hero" className="text-xl text-gray-800 hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="text-xl text-gray-800 hover:text-blue-600">About</a></li>
        <li><a href="#skills" className="text-xl text-gray-800 hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" className="text-xl text-gray-800 hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="text-xl text-gray-800 hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;