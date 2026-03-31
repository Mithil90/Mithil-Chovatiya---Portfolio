import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Mithil Chovatiya</h1>
        <p className="hero-subtitle">UI/UX Designer & Full Stack Developer</p>
        <p className="hero-desc">Creating beautiful and functional digital experiences with modern technologies</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">View My Work</button>
          <button className="btn btn-secondary">Get in Touch</button>
        </div>
      </div>
      <div className="hero-cards">
        <div className="card card-1">🎨 Design</div>
        <div className="card card-2">💻 Code</div>
        <div className="card card-3">🚀 Deploy</div>
      </div>
    </section>
  );
};

export default Hero;