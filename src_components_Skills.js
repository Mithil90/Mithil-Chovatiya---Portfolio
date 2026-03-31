import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      category: 'Design',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Wireframing']
    },
    {
      category: 'Other',
      skills: ['Git', 'Docker', 'AWS', 'Firebase', 'GraphQL']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;