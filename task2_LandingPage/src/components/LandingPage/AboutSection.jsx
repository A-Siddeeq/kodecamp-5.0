import React from "react";
import pic2 from "../../assets/images/components/AboutSection/pic2.png";
import pic3 from "../../assets/images/components/AboutSection/pic3.png";
import pic4 from "../../assets/images/components/AboutSection/pic4.png";
import "../styles/AboutSection.css";

const AboutSection = () => (
  <section className="about-section">
    <div className="about-grid">
      <img src={pic2} alt="" />
      <img src={pic3} alt="" className="middle-img" />
      <img src={pic4} alt="" />
    </div>
    <div className="about-text">
      <h1>About</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <button className="read-more-btn">READ MORE →</button>
    </div>
  </section>
);

export default AboutSection;
