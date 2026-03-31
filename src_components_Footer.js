import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mithil Chovatiya</h3>
            <p>UI/UX Designer & Full Stack Developer</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="footer-social">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Mithil Chovatiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;