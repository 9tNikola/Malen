import React, { useState, useEffect } from "react";
import "./HeroBanner.css";
import { HashLink } from 'react-router-hash-link';

const HeroBanner = () => {
  const carouselData = [
    {
      image: "/images/image1.jpg",
      subtitle: "NON STOP CAR SERVICING CENTER",
      title: "GET YOUR AMAZING CAR SERVICES",
      text: "Take payments online with a scalable platform that grows with your perfect business.",
    },
    {
      image: "/images/image2.jpg",
      subtitle: "AMAZING CAR SERVICING CENTER",
      title: "FIX YOUR PERSONAL CAR PROBLEM",
      text: "Take payments online with a scalable platform that grows with your perfect business.",
    },
    {
      image: "/images/image3.jpg",
      subtitle: "CAR SERVICING CENTER IN NEW YORK",
      title: "FIX ANY COMPLEX CAR SOLUTION",
      text: "Take payments online with a scalable platform that grows with your perfect business.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [carouselData.length]);

  const { image, subtitle, title, text } = carouselData[currentIndex];
  const buttons = [
    {className:"button1",label:1},
    {className:"button2",label:2},
    {className:"button3",label:3}
  ]
  return (
    <section className="hero-banner">
        <img className="hero-image" src={image} alt="Hero" />
        <div className="row">
          <div className="hero-overlay">
            <span className="slide-down hero-subtitle">{subtitle}</span>
            <h1 className="slide-down hero-title">{title}</h1>
            <p className="slide-down hero-text">{text}</p>
            <HashLink to='/contact'><button className="hero-button">Contact Us</button></HashLink>
          </div>
          <div className="hero-index-buttons">
            {buttons.map((button,index)=><button className={`${button.className} ${button.label == currentIndex+1?"selected":''}`} key={index}>{button.label}</button>)}
          </div>
        </div>
    </section>
  );
};

export default HeroBanner;
