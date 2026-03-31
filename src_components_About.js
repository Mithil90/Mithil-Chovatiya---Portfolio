import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a passionate UI/UX Designer and Full Stack Developer with expertise in creating modern, aesthetic digital experiences. With 5+ years of experience, I've worked with startups and enterprises to build scalable solutions.</p>
            <p>My approach combines design thinking with technical excellence. I believe in creating products that are not just functional, but delightful to use.</p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;