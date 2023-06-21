import React, { useState, useEffect } from "react";
import "../assets/scss/sliding.css";
import Box from "../images/Clean-box.png";
import Cleaner from "../images/Cleaner.png";

const CardWithSlidingBackground = () => {
  const images1 = [Box, Cleaner];
  const images2 = [Cleaner, Box];

  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    const newIndex = (slideIndex - 1 + images1.length) % images1.length;
    setSlideIndex(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = (slideIndex + 1) % images1.length;
    setSlideIndex(newIndex);
  };

  return (
    <div className="container">
      <div className="slideshow-container">
        <div className="card card1">
          {images1.map((image, index) => (
            <div
              className={`mySlides ${slideIndex === index ? "active" : ""}`}
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>

        <div className="card">
          {images2.map((image, index) => (
            <div
              className={`mySlides ${slideIndex === index ? "active" : ""}`}
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-4 float-end d-flex me-3">
        <button className="slide-btn prev-button me-3" onClick={handlePrevSlide}>
          &#129120;
        </button>
        <button className="slide-btn next-button" onClick={handleNextSlide}>
          &#129122;
        </button>
      </div>
    </div>
  );
};

export default CardWithSlidingBackground;
