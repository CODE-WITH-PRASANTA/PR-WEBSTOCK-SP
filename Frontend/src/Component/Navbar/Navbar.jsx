import React, { useState } from "react";
import { HiMiniXMark, HiMiniBars3 } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../../assets/prwebstock_logo.png";

const Navbar = () => {
  const [NavbarMenu, setNavbarMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Why Us", path: "#why-us" },
    { name: "Why Growth", path: "#why-growth" },
    { name: "Pricing", path: "#pricing" },
    { name: "Technology", path: "#tech" },
    { name: "Reviews", path: "#reviews" },
    { name: "FAQs", path: "#faqs" },
  ];

  return (
    <header className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__logoSection">
          <img src={logo} alt="PR Webstock" className="Navbar__logo" />
        </div>

        <nav className="Navbar__menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="Navbar__link">{link.name}</a>
          ))}
        </nav>

        <div className="Navbar__right">
          <a href="#contact" className="Navbar__contactBtn">
            <FaRegHandshake className="Navbar__contactIcon" /> Contact us
          </a>
        </div>

        <button className="Navbar__toggle" onClick={() => setNavbarMenu(!NavbarMenu)}>
          {NavbarMenu ? <HiMiniXMark /> : <HiMiniBars3 />}
        </button>
      </div>

      <div className={`Navbar__mobileMenu ${NavbarMenu ? "Navbar__mobileMenu--active" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.path} className="Navbar__mobileLink" onClick={() => setNavbarMenu(false)}>
            {link.name}
          </a>
        ))}
        <a href="#contact" className="Navbar__mobileContactBtn" onClick={() => setNavbarMenu(false)}>
          <FaRegHandshake /> Contact us
        </a>
      </div>
    </header>
  );
};

export default Navbar;