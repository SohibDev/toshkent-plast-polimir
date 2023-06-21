import React from "react";
import "../assets/scss/global.css";
import "../assets/scss/about.css";
import Clock from "../images/mdi_stopwatch-check.svg";
import Building from "../images/building.svg";
import Community from "../images/community.svg";
import Garrage from "../images/garrage.svg";

const About = () => {
  return (
    <div className="about about-container">
      <div className="about-topWrapper">
        <h1 className="about-h1">About us</h1>
        <div className="about-topWrapper-bottom">
          <p>
            Currently, our company manufactures a wide range of plastic boxes
            for storing and transporting various fruits and vegetables, plastic
            buckets for consumer and industrial needs, as well as children's
            toys. In addition, we produce bumpers for GM cars, garbage cans for
            the TOZA HUDOOD project.
          </p>
          <button className="about-btn">More know</button>
        </div>
      </div>
      <div className="about-bottomWrapper row">
        <div className="about-bottomWrapper-card col-12 col-sm-6 col-lg-3">
          <img src={Clock} alt="clock" />
          <h2 className="">70 000+</h2>
          <p>How many hours can be used</p>
        </div>
        <div className="about-bottomWrapper-card col-12 col-sm-6 col-lg-3">
          <img src={Building} alt="Building" />
          <h2>7000 m2</h2>
          <p>total production area</p>
        </div>
        <div className="about-bottomWrapper-card col-12 col-sm-6 col-lg-3">
          <img src={Community} alt="Community" />
          <h2>300 ^</h2>
          <p>total worker</p>
        </div>
        <div className="about-bottomWrapper-card col-12 col-sm-6 col-lg-3">
          <img src={Garrage} alt="Garrage" />
          <h2>10 000 m2</h2>
          <p>total warehouse capacity</p>
        </div>
      </div>
    </div>
  );
};

export default About;
