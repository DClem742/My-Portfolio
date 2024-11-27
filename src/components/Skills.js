import React from 'react';
import './Skills.css';
const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      category: "Backend",
      items: ["Python", "RESTful APIs"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "Supabase"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div className="skill-category" key={index}>
            <h3>{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, i) => (
                <span className="skill-item" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
