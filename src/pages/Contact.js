import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out with any questions or feedback.</p>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Type your message here"></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Email: <a href="mailto:support@malen.com">support@malen.com</a></p>
          <p>Phone: <a href="tel:+123456789">+123 456 789</a></p>
          <p>Address: 123 Malen Street, Tech City, World</p>
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-icon">🌐</a>
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
