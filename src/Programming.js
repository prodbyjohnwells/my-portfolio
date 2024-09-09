import React from 'react';
import './Programming.css';

const projects = [
  {
    title: 'Mangata Gallo Project',
    description: 'This project demonstrates HTML and CSS skills by creating a responsive website.',
    technologies: ['HTML', 'CSS'],
    githubLink: 'https://github.com/prodbyjohnwells/Mangata-Gallo-Project',
    demoUrl: 'https://prodbyjohnwells.github.io/Mangata-Gallo-Project/',
  },
  {
    title: 'Little Lemon Booking Website',
    description: "This project was developed as part of Meta's Coursera Front-End Development course, representing the capstone of the Front-End Development Track.",
    technologies: ['React', 'JavaScript', 'CSS'],
    githubLink: 'https://github.com/prodbyjohnwells/frontend-dev-little-lemon',
    demoUrl: 'https://prodbyjohnwells.github.io/frontend-dev-little-lemon/',
  },
];

const Programming = () => {
  return (
    <div className="programming-page">
      <h1 className="programming-title">Programming Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            <div className="project-buttons">
              <a href={project.githubLink} className="button" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
              {project.demoUrl && (
                <div className="demo-container">
                  <iframe
                    src={project.demoUrl}
                    title={`${project.title} Demo`}
                    className="demo-iframe"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {project.videoDemo && (
                <div className="video-container">
                  <iframe
                    src={project.videoDemo}
                    title={`${project.title} Video Demo`}
                    className="video-iframe"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programming;
