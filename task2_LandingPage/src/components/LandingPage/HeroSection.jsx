import React from "react";
import pic1 from "../../assets/images/components/HeroSection/pic1.png";
import pageslash from "../../assets/images/components/pagesnavigation/pageslash.svg";
import "../styles/HeroSection.css";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-light">PROJECT</h1>
        <h1 className="hero-bold">Lorum</h1>
        <div className="page-indicator">
          <span className="active">01</span>
          <img src={pageslash} alt="" />
          <span>05</span>
        </div>
      </div>

      <div className="hero-image">
        <img src={pic1} alt="Project Preview" />
        <button className="view-projects-btn">VIEW PROJECTS →</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
