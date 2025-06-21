import React from "react";
import "./styles/Projects.css";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import pic1 from "../assets/images/pages/ProjectsPage/pic1.png";
import pic2 from "../assets/images/pages/ProjectsPage/pic2.png";
import pic3 from "../assets/images/pages/ProjectsPage/pic3.png";
import PagesNavigation from "../components/PagesNavigation";
import HeadingTexts from "../components/HeadingTexts";
import Navbar from "../components/Navbar";

const Projects = () => {
  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

  return (
    <div className="projects-container">
      <Navbar />
      <div className="projects-header">
        <HeadingTexts
          lighttext="Our"
          lighttextsize="2rem"
          boldtext="Projects"
          boldtextsize="5px"
        />
      </div>

      <div className="projects-list">
        <ProjectCard
          image={pic1}
          title="Sample Project"
          description={description}
        />
        <ProjectCard
          image={pic2}
          title="Sample Project 2"
          description={description}
        />
        <ProjectCard
          image={pic3}
          title="Sample Project 3"
          description={description}
        />
      </div>

      <PagesNavigation />

      <Footer />
    </div>
  );
};

export default Projects;
