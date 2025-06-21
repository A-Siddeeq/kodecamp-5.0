import React from "react";
import pic5 from "../../assets/images/components/ProjectGrid/pic5.png";
import pic5overlay from "../../assets/images/components/ProjectGrid/pic5overlay.png";
import pic6 from "../../assets/images/components/ProjectGrid/pic6.png";
import pic7 from "../../assets/images/components/ProjectGrid/pic7.png";
import pic8 from "../../assets/images/components/ProjectGrid/pic8.png";
import pic9 from "../../assets/images/components/ProjectGrid/pic9.png";
import "../styles/ProjectGrid.css";

const ProjectGrid = () => (
  <section className="projects-section">
    <h1>Our Projects</h1>
    <div className="projects-grid">
      <div className="project-card featured">
        <img src={pic5} alt="Main Project" />
        <img className="overlay-img" src={pic5overlay} alt="Overlay" />
        <div className="overlay-content">
          <h1>Sample Project</h1>
          <button>VIEW MORE →</button>
        </div>
      </div>
      <img className="project-thumb img6" src={pic6} alt="Project 6" />
      <img className="project-thumb img7" src={pic7} alt="Project 7" />
      <img className="project-thumb img8" src={pic8} alt="Project 8" />
      <img className="project-thumb img9" src={pic9} alt="Project 9" />
    </div>
    <button className="all-projects-btn">ALL PROJECTS → </button>
  </section>
);

export default ProjectGrid;
