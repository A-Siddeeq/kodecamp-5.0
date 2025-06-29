import React from "react";
import "./styles/ProjectCard.css";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <button className="project-button">View More</button>
      </div>
    </div>
  );
};

export default ProjectCard;
