import React from 'react';
import './ProjectCard.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  // Construct the full image URL
  const imageUrl = project.imagePath 
    ? `${process.env.REACT_APP_API_URL || ''}${project.imagePath}`
    : null;

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = '/default-project.png';
  };

  return (
    <div className="project-card">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={project.name} 
          className="project-image"
          onError={handleImageError}
          loading="lazy"
        />
      ) : (
        <div className="image-placeholder">
          <img 
            src="/default-project.png" 
            alt="Default project" 
            className="placeholder-image"
          />
        </div>
      )}
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.technologies.split(',').map(tech => (
            <span key={tech.trim()} className="tech-badge">{tech.trim()}</span>
          ))}
        </div>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            <FaExternalLinkAlt /> View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;