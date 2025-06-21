import React from "react";
import "./styles/Footer.css";
import footerlogo from "../assets/images/components/footer/footerlogo.svg";
import facebook from "../assets/images/components/footer/fb.svg";
import twitter from "../assets/images/components/footer/twt.svg";
import linkedin from "../assets/images/components/footer/likedin.svg";
import pinterest from "../assets/images/components/footer/pinterest.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footerlogo} alt="Footer Logo" />
        </div>

        <div className="footer-links">
          <ul className="footer-column">
            <p className="footer-title">Information</p>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contact</li>
          </ul>

          <ul className="footer-column">
            <p className="footer-title">Contacts</p>
            <li>
              1234 Sample Street
              <br />
              Austin Texas 78704
            </li>
            <li>512.333.2222</li>
            <li>sampleemail@gmail.com</li>
          </ul>
        </div>

        <div className="footer-social">
          <p className="footer-title">Social Media</p>
          <ul className="social-icons">
            <li>
              <img src={facebook} alt="Facebook icon" />
            </li>
            <li>
              <img src={twitter} alt="Twitter icon" />
            </li>
            <li>
              <img src={linkedin} alt="LinkedIn icon" />
            </li>
            <li>
              <img src={pinterest} alt="Pinterest icon" />
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">&copy; 2021. All rights reserved</p>
    </div>
  );
};

export default Footer;
