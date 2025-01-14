import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-center text-white py-6">
      <p>© {year} Sujith Nekkanti | <a href="mailto:nekkantisujith@gmail.com" className="text-blue-400">Email Me</a></p>
    </footer>
  );
}

export default Footer;
