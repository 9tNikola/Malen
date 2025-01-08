import React, { useState, useEffect } from "react";
import "./carousal.css";

export default function Carousal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default: 3 cards for desktop
  const services = [1, 2, 3, 4, 5];
  const totalSlides = services.length - cardsToShow + 1; // Total valid positions

  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setCardsToShow(3); // Desktop: 3 cards
    } else if (screenWidth >= 768) {
      setCardsToShow(2); // Tablet: 2 cards
    } else {
      setCardsToShow(1); // Mobile: 1 card
    }
  };

  useEffect(() => {
    // Set initial cards to show
    updateCardsToShow();

    // Update on window resize
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const getTransformStyle = () => {
    const cardWidth = 100 / cardsToShow; // Calculate card width as percentage
    return {
      transform: `translateX(-${currentSlide * cardWidth}%)`,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev + 1 < totalSlides ? prev + 1 : 0 // Loop back to the first slide
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div id="services" className="carousal-section">
      <div className="carousal-head">
        <div className="subtitle">
          <div className="red-lines start">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
          OUR BEST SERVICE
          <div className="red-lines end">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
        </div>
        <div className="title">Quality Servicing Opportunity</div>
      </div>
      <div className="slider-container">
        <div className="slider" style={getTransformStyle()}>
        {services.map((item) => (
  <div
    className="card"
    key={item}
    style={{ flex: `0 0 ${100 / cardsToShow}%` }} // Ensures equal width distribution
  >
    <div className="card-img">
      <img
        src={`/images/serviceimg/service${item}.jpg`}
        className="card-image"
        alt={`Service ${item}`}
      />
    </div>
    <div className="cl-content">
      <div className="service-block-number">SERVICE {item}</div>
      <div className="service-title">Service Title {item}</div>
      <button className="card-button">VIEW SERVICE</button>
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
}
