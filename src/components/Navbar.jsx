import React, { useState } from "react";
import logo from "../RB-Logo.png";
import Btn from "./Btn";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar">
      <header>
        <div className="hum">
          <Logo />
          <div
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <Nav isMenuOpen={isMenuOpen} />
      </header>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

function Nav({ isMenuOpen }) {
  const Navigation = [
    { nav: "Home", anchor: "/" },
    { nav: "Products", anchor: "/products" },
    { nav: "About", anchor: "/about" },
    { nav: "Color", anchor: "/color" },
    { nav: "Media", anchor: "/media" },
  ];

  return (
    <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
      <ul>
        {Navigation.map((item, index) => (
          <li key={index}>
            <a href={item.anchor}>{item.nav}</a>
          </li>
        ))}
      </ul>
      <div className="dropdown-buttons">
        <Btn btn="Get in touch" />
        <Btn Classname="btn" btn="Paint Calculator" />
      </div>
    </nav>
  );
}

export default Navbar;
