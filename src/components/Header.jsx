import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        {/* Desktop Title */}
        <h1 className="desktop-title">Vinushaanth's Portfolio</h1>

        {/* Mobile Title */}
        <h1 className="mobile-title"> Portfolio</h1>
      </div>

      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="home" className="nav-link">Home</a></li>
          <li><a href="about" className="nav-link">About</a></li>
          <li><a href="projects" className="nav-link">Projects</a></li>
          <li><a href="contact" className="nav-link">Contact</a></li>
          <li><a href="interests" className="nav-link">Interests</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
