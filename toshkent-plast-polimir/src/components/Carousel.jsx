import React, { useEffect, useState } from "react";
import "../assets/scss/carousel.css";
import Pepsi from "../images/pepsi.svg";
import Olma from "../images/olma-uchun-1.svg";
import Euro from "../images/paddon-euro-3.svg";
import Chelak from "../images/chelak-2.svg";
import Cola1 from "../images/coca-cola-1.png";
import Karam from "../images/karam-1-1.svg";
import Bak from "../images/bak-2-1.svg";
import Togora from "../images/tog`ora -2.svg";

const images = [
  { src: Pepsi, alt: "Pepsi" },
  { src: Olma, alt: "Olma" },
  { src: Euro, alt: "Euro" },
  { src: Chelak, alt: "Chelak" },
  { src: Cola1, alt: "Cola1" },
  { src: Karam, alt: "Karam" },
  { src: Bak, alt: "Bak" },
  { src: Togora, alt: "Togora" },
];

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interValid = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interValid);
  }, [currentIndex]);

  return (
    <div className="container">
      <div className="slider">
        <div className="slider-container">
          <div className="slider-carousel">
            {images.map((image, i) => (
              <img
                key={i}
                src={image.src}
                className="slider-image"
                alt={`slide ${i}`}
                style={{ display: i === currentIndex ? "block" : "none" }}
              />
            ))}
          </div>
          <div className="slider-controls">
          <button onClick={handlePrev}>&lt;</button>
          <div className="slider-counter" style={{ color: "black" }}>
          {currentIndex + 1}/{8}
          </div>
          <button onClick={handleNext}>&gt;</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
