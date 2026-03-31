import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application',
      tech: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics',
      tech: ['React', 'Chart.js', 'Express', 'PostgreSQL']
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'AI-powered chatbot with NLP capabilities',
      tech: ['React', 'Python', 'TensorFlow', 'Socket.io']
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasting',
      tech: ['React', 'API Integration', 'Geolocation']
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Headless CMS blog platform with markdown support',
      tech: ['Next.js', 'Strapi', 'PostgreSQL']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button className="project-btn">View Project</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;