import React from "react";
import num1 from "../../assets/images/components/MainSection/num1.svg";
import num2 from "../../assets/images/components/MainSection/num2.svg";
import "../styles/MainSection.css";

const MainSection = () => (
  <section className="focus-section">
    <h1>Main Focus/Mission Statement</h1>
    <div className="focus-list">
      <div className="focus-item">
        <img src={num1} alt="1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, lectus et facilisis placerat.
        </p>
      </div>
      <div className="focus-item">
        <img src={num2} alt="2" />
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, lectus et facilisis placerat, magna mauris porttitor
          tortor, a auctor est felis ut nisl.
        </p>
      </div>
    </div>
  </section>
);

export default MainSection;
