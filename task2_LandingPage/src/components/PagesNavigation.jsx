import React from "react";
import "./styles/PagesNavigation.css";
import prev from "../assets/images/components/pagesnavigation/prev.svg";
import next from "../assets/images/components/pagesnavigation//next.svg";
import pageSeperator from "../assets/images/components/pagesnavigation/pageslash.svg";

const PagesNavigation = () => {
  return (
    <div className="project-navigation">
      <div className="pagination">
        <span className="page-current">01</span>
        <img src={pageSeperator} alt="Page separator" />
        <span className="page-total">05</span>
      </div>
      <div className="nav-buttons">
        <button className="nav-button">
          <img src={prev} alt="Previous" />
        </button>
        <button className="nav-button active">
          <img src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default PagesNavigation;
