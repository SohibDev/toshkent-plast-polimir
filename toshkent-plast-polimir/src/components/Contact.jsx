import React from "react";
import "../assets/scss/contact.css";
import Instagram from "../images/ins2.svg";
import Facebook from "../images/face2.svg";
import Youtube from "../images/you2.svg";
import Tweeter from "../images/tweet2.svg";
import Linkdelin from "../images/in2.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="contact-title">our contact</h1>
        <div className="contact-wrapper">
          <div className="contact-wrapper-info">
            <h1>LLC "TOSHKENT PLAST POLIMER"</h1>
            <ul>
              <li>
                <p>Address</p>
                <p>
                  republika of uzbekistan, tashkent city, oltin topgan street,
                  home-22
                </p>
              </li>
              <li>
                <p>Email;</p>
                <p>toshkentplastpolimer@gmail.com</p>
              </li>
              <li>
                <p>Telfon</p>
                <p>+998 (71) 770 70 70 +998 (71) 770 70 70</p>
              </li>
              <li className="social-links">
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
                <img src={Youtube} alt="" />
                <img src={Tweeter} alt="" />
                <img src={Linkdelin} alt="" />
              </li>
            </ul>
          </div>
          <div className="contact-forms">
            <h2>
              Leave us your suggestions and questions and we will get back to
              you
            </h2>
            
            <form className="contact-form">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Write your opinion here"
              ></textarea>

              <div class="input-group">
                <input
                  type="text"
                  placeholder="Email/Telfon"
                  id="contact-input"
                />
                <button type="submit" id="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
