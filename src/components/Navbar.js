import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">My Portfolio</div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      <div className="nav-controls">
        {/* Add your dark mode toggle component here */}
        <div className="dark-mode-toggle">
          {/* Your dark mode icon/button */}
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;