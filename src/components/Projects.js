import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Mythic Mana",
      description: "A Magic: The Gathering deck building and collection management application",
      technologies: ["React", "Supabase", "CSS", "Scryfall API"],
      image: "/images/project1.jpg",
      githubLink: "https://github.com/DClem742/MythicMana",
      liveLink: "https://mythicmana.netlify.app"
    }
  ];

  return (    <section id="projects" className="section projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
