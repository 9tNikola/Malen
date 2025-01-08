import React from "react";
import "./Feature.css"; // Styles defined in Feature.css

const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature-image-section">
        <img
          src="/images/feature/video_2-2.jpg" // Replace with the actual image URL
          alt="Feature"
          className="feature-image"
        />
        <div className="feature-play-button">
          <button>
            <i className="fa fa-play"></i>
            <div className="wings"></div>
          </button>
        </div>
      </div>
      <div className="feature-text-section">
        <div className="features-subheading">
          <div className="red-lines start">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
          ABOUT OUR COMPANY
          <div className="red-lines end">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
        </div>
        <h3 className="feature-heading">Why Choose Us?</h3>
        <div className="feature-item">
          <span className="feature-number">01</span>
          <div className="feature-content">
            <h4 className="feature-subheading">24/7 Work Process</h4>
            <p className="feature-description">
              Intrinsicly fashion enterprise manufactured products after open
              source e-service engage transparent channels.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-number">02</span>
          <div className="feature-content">
            <h4 className="feature-subheading">Expert Team Members</h4>
            <p className="feature-description">
              Intrinsicly fashion enterprise manufactured products after open
              source e-service engage transparent channels.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <span className="feature-number">03</span>
          <div className="feature-content">
            <h4 className="feature-subheading">Quality Time Delivery</h4>
            <p className="feature-description">
              Intrinsicly fashion enterprise manufactured products after open
              source e-service engage transparent channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
