import React, { useState } from "react";
import "../assets/scss/header.css";
import Logo from "../images/logoHeader.svg";
import Menu from "../images/menu.png";
import Closer from "../images/closer.svg";


const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div href="/" className="navbar-logo">
            <img src={Logo} alt="logo" />
            <p>TOSHKEN PLAST POLIMIR</p>
          </div>
          <div className={`navbar-menu ${open ? "active" : ""}`}>
            <img src={Closer} id="close"
            onClick={toggleOpen} className="navbar-close" alt="" />
            <p href="/" className="navbar-item">
            Home
            </p>
            <p href="/about" className="navbar-item">
            Company us
            </p>
            <p href="/services" className="navbar-item">
            Products
            </p>
            <p href="/contact" className="navbar-item">
            Servic
            </p>
            <p href="/contact" className="navbar-item">
            Contakt
            </p>
          </div>
          <div className="navbar-toggle" onClick={toggleOpen}>
            <img src={Menu} alt="" />
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
};

export default Header;
