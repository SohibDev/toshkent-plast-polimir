import React from "react";
import "../assets/scss/hero.css";
import SliderComponent from "./Carousel";
import "../assets/scss/global.css";

const Hero = () => {
  return (
    <div className="hero" style={{overflow: 'hidden'}}>
      <div className="container" style={{overflow: 'hidden'}}>
        <div className="hero-wrapper">
          <div>
            <h1 className="hero-h1">TOSHKENT PLAST POLIMIR</h1>
            <button className="hero-btn">More Product</button>
            <p className="hero-text">
              Our company has installed more than 20 types of <br /> modern
              thermoplastic machines for molding plastic products,{" "}
            </p>
          </div>
          <div className="hero-carousel">
            <SliderComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
