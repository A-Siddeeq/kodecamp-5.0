import React from "react";
import JustForYou from "../components/HomePage/JustForYou";
import HeroSection from "../components/HomePage/HeroSection";
import FlashSales from "../components/HomePage/FlashSales";
import Categories from "../components/HomePage/Categories";
import BestSelling from "../components/HomePage/BestSelling";
import Ad from "../components/HomePage/Ad";
import OurProducts from "../components/HomePage/OurProducts";
import Featured from "../components/HomePage/Featured";
import Benefits from "../components/HomePage/Benefits";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSelling />
      <Ad />
      <OurProducts />
      <Featured />
      <Benefits />
      <JustForYou />
    </div>
  );
};

export default HomePage;
