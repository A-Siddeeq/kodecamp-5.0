import React from "react";
import Navbar from "../components/Navbar";
import HeadingTexts from "../components/HeadingTexts";
import "./styles//PhotoGallery.css";
import pic1 from "../assets/images/pages/PhotoGallery/pic1.png";
import pic2 from "../assets/images/pages/PhotoGallery/pic2.png";
import pic3 from "../assets/images/pages/PhotoGallery/pic3.png";
import pic4 from "../assets/images/pages/PhotoGallery/pic4.png";
import pic5 from "../assets/images/pages/PhotoGallery/pic5.png";
import pic6 from "../assets/images/pages/PhotoGallery/pic6.png";
import pic7 from "../assets/images/pages/PhotoGallery/pic7.png";
import pic8 from "../assets/images/pages/PhotoGallery/pic8.png";
import pic9 from "../assets/images/pages/PhotoGallery/pic9.png";
import pic10 from "../assets/images/pages/PhotoGallery/pic10.png";
import Footer from "../components/Footer";
import PagesNavigation from "../components/PagesNavigation";

const PhotoGallery = () => {
  const imageList = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
  ];

  return (
    <div>
      <Navbar />
      <HeadingTexts
        lighttext="Photo"
        lighttextsize="2rem"
        boldtext="Gallery"
        boldtextsize="5px"
      />
      <div className="gallery-container">
        {imageList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`gallery-${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
      <PagesNavigation />
      <Footer />
    </div>
  );
};

export default PhotoGallery;
