import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="container">
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "bar1" : ""}`} />
        <div className={`bar ${menuOpen ? "bar2" : ""}`} />
        <div className={`bar ${menuOpen ? "bar3" : ""}`} />
      </div>

      {/* Navigation links */}
      <ul className={`list-container ${menuOpen ? "open" : ""}`}>
        <li onClick={closeMenu}>
          <Link to="/">MAIN</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/gallery">GALLERY</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li onClick={closeMenu}>CERTIFICATIONS</li>
        <li onClick={closeMenu}>CONTACTS</li>
      </ul>
    </div>
  );
};

export default Navbar;
