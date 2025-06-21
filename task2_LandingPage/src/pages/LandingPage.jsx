import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/LandingPage/HeroSection";
import AboutSection from "../components/LandingPage/AboutSection";
import MainSection from "../components/LandingPage/MainSection";
import ProjectGrid from "../components/LandingPage/ProjectGrid";
import ContactForm from "../components/LandingPage/ContactForm";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MainSection />
      <ProjectGrid />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
