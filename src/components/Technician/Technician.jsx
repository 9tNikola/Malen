import React, { useState, useEffect } from "react";
import "./Technician.css";

export default function TechnicianCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2); // Default number of visible cards

  const technicians = [
    { id: 1, name: "Kevin Martin", role: "Engine Expert", image: "/images/team/team_1_1.jpg" },
    { id: 2, name: "Aiden Samuel", role: "Engine Expert", image: "/images/team/team_1_2.jpg" },
    { id: 3, name: "Joseph Carter", role: "Engine Expert", image: "/images/team/team_1_3.jpg" },
    { id: 4, name: "Andrew Adrian", role: "Engine Expert", image: "/images/team/team_1_4.jpg" },
  ];

  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width > 1200) setCardsToShow(3);
    else if (width > 768) setCardsToShow(2);
    else setCardsToShow(1);
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const totalSlides = technicians.length - cardsToShow + 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < totalSlides ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1));
  };

  return (
    <div className="technician-carousel">
      <div className="technician-header">
        <div className="subtitle">
          <div className="red-lines start">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
          Meet Our Experts
          <div className="red-lines end">
            <div className="upper-line"></div>
            <div className="lower-line"></div>
          </div>
        </div>
        <div className="title">Skilled Technicians for Every Job</div>
      </div>

      <div className="carousel-buttons">
        <button className="slider-button prev" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="slider-container">
          <div
            className="technician-slider"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
              width: `${(technicians.length / cardsToShow) * 100}%`,
            }}
          >
            {technicians.map((tech) => (
              <div
                className="technician-card"
                key={tech.id}
                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
              >
                <div className="card-image-container">
                  <img src={tech.image} alt={tech.name} className="card-image" />
                  <div className="card-content">
                    <div className="card-text">
                      <h3 className="technician-name">{tech.name}</h3>
                      <p className="technician-role">{tech.role}</p>
                    </div>
                    <div className="social-icons">
                      <a href="#facebook" className="icon facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#twitter" className="icon twitter">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#linkedin" className="icon linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
