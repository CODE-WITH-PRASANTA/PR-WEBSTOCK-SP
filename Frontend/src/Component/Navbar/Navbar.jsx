import React, { useState } from "react";
import {
  HiSparkles,
  HiMiniXMark,
  HiMiniBars3,
} from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa6";

import "./Navbar.css";

// Import your logo image
import logo from "../../assets/prwebstock_logo.png";

const Navbar = () => {
  const [NavbarMenu, setNavbarMenu] = useState(false);

  return (
    <header className="Navbar">
      <div className="Navbar__container">

        {/* Logo */}
        <div className="Navbar__logoSection">
          <img
            src={logo}
            alt="PR Webstock"
            className="Navbar__logo"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="Navbar__menu">
          <a href="/" className="Navbar__link Navbar__active">
            <HiSparkles className="Navbar__linkIcon" />
            Home
          </a>

          <a href="/" className="Navbar__link">
            Pages
          </a>

          <a href="/" className="Navbar__link">
            Blog
          </a>

          <a href="/" className="Navbar__link">
            Careers
          </a>

          <a href="/" className="Navbar__link">
            Landing
          </a>
        </nav>

        {/* Contact Button */}
        <div className="Navbar__right">
          <button className="Navbar__contactBtn">
            <FaRegHandshake className="Navbar__contactIcon" />
            Contact us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="Navbar__toggle"
          onClick={() => setNavbarMenu(!NavbarMenu)}
        >
          {NavbarMenu ? <HiMiniXMark /> : <HiMiniBars3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`Navbar__mobileMenu ${
          NavbarMenu ? "Navbar__mobileMenu--active" : ""
        }`}
      >
        <a href="/" className="Navbar__mobileLink">
          Home
        </a>

        <a href="/" className="Navbar__mobileLink">
          Pages
        </a>

        <a href="/" className="Navbar__mobileLink">
          Blog
        </a>

        <a href="/" className="Navbar__mobileLink">
          Careers
        </a>

        <a href="/" className="Navbar__mobileLink">
          Landing
        </a>

        <button className="Navbar__mobileContactBtn">
          <FaRegHandshake />
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Navbar;