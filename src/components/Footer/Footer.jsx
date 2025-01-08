import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <React.Fragment>
      <footer class="footer-section">

  <div class="footer-top">

    <div class="footer-about">
      <h3>About Company</h3>
      <p class="text">
        Centric applications productize before front end vortals visualize front end is results and value added
      </p>
      <div class="info-head">
        <p className="head">WE ARE AVAILABLE</p>
        <p className="text">Mon-Sat: 09.00 am to 6.30 pm</p>
      </div>
      <button>Contact Us</button>
    </div>

    <div class="footer-links">
      <h3>Quick Links</h3>
      <div class="link"><a href="#">About Us</a></div>
      <div class="link"><a href="#">Popular Services</a></div>
      <div class="link"><a href="#">Why Choose Us</a></div>
      <div class="link"><a href="#">Portfolio</a></div>
      <div class="link"><a href="#">Blogs & News</a></div>
      <div class="link"><a href="#">Contact Us</a></div>
    </div>


    <div class="footer-subscribe">
      <h3>Subscribe To Our Newsletter</h3>
      <p class="subscribe-text">Sign up to receive updates, special offers, and exclusive deals.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </form>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="copyright-text">
      &copy; 2024 Your Company. All Rights Reserved.
    </div>
    <div class="footer-social-icons">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </div>
</footer>


    </React.Fragment>
  );
}
