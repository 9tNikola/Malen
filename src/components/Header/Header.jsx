import React, { useState } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollWithOffset = (el) => {
    const yOffset = 100; // Adjust offset as needed
    const yCoordinate = el.getBoundingClientRect().top + yOffset;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="header-logo2"></div>
        <div className="header-content">
          <div className="header-content-top">
            <div className="logo-space"></div>
            <div className="top-content">
              {" "}
              <div className="left">
                <p>Welcome To Car Repair & Service Theme</p>
              </div>
              <div className="right">
                <span>Follow Us:</span>
                <div className="social-icons">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="allah-ditta">
            <div className="header-content-bottom">
              <div className="header-contacts">
                <div className="email-box contact">
                  <div className="email-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="email-content">
                    <div className="placeholder">Make An Email</div>
                    <div className="data">info@malen.com</div>
                  </div>
                </div>
                <div className="Phone-box contact">
                  <div className="phone-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact-content">
                    <div className="placeholder">Call Us 24/7</div>
                    <div className="data">589 (246) 2145 2142</div>
                  </div>
                </div>
                <div className="time-box contact">
                  <div className="time-icon">
                    <i className="fa fa-clock"></i>
                  </div>
                  <div className="time-content">
                    <div className="placeholder">Office Hours</div>
                    <div className="data">Mon-Sat: 8am - 6pm</div>
                  </div>
                </div>
              </div>
              <div className="header-buttons">
                <div className="search  button">
                  <i className="fa fa-search"></i>
                </div>
                <div className="cart button">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
              <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-nav">
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <HashLink to="/home"><li>HOME</li></HashLink>
            <HashLink to="/#services" scroll={scrollWithOffset}><li>SERVICES</li></HashLink>
            <HashLink to="/#products" scroll={scrollWithOffset}><li>PRODUCTS</li></HashLink>
            <HashLink to="/#price" scroll={scrollWithOffset}><li>PRICING</li></HashLink>
            <HashLink to="/contact" scroll={scrollWithOffset}><li>CONTACT US</li></HashLink>
          </ul>
        </nav>
        
        <div className="location">
          <i className="fa fa-map-marker"></i>
          <span> OFFICE LOCATION</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
