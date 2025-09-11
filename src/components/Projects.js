import React from "react";
import "./Projects.css";
import projectsData from "../projectsData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
