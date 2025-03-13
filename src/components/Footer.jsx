import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';  // Importing icons
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Links with Icons */}
        <div className="social-links">
          <a href="https://github.com/Selvarajah-Vinushaanth" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/selvarajah-vinushaanth/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:selvavinu26816@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaEnvelope/> Mail
          </a>
        </div>

        {/* Contact Information with Icons */}
        <div className="contact-info">
          {/* <p><FaEnvelope /> <a href="mailto:vinushaanth@example.com" className="contact-link">selvavinu26816@gmail.com</a></p> */}
          {/* <p><FaPhoneAlt /> <a href="tel:+94711234567" className="contact-link">+94 71 123 4567</a></p> */}
        </div>

        {/* Footer Text */}
        <p className="footer-text">© {new Date().getFullYear()} Vinushaanth's Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
