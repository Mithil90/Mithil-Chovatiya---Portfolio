import React from 'react';
import './Header.css';

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">MC</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Header;