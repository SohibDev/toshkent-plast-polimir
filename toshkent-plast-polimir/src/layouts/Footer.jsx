import React from "react";
import "../assets/scss/footer.css";
import FooterLogo from "../images/footer-logo.svg";
import InstagramIcon from "../images/instagram.svg";
import FacebookIcon from "../images/facebook.svg";
import YoutubeIcon from "../images/youtube.svg";
import TwitterIcon from "../images/twitter.svg";
import LinkedInIcon from "../images/link.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className=" footer-container">
        <div className="footer-control">
          <div className="footer-logo">
            <img src={FooterLogo} alt="" />
            <h1>TOSHKEN PLAST <br /> POLIMIR</h1>
          </div>
          <div className="line1">

          </div>
          <div>
            <div className="footer-navigation">
              <div className="footer-navigation-button">Home</div>
              <div className="footer-navigation-button">Company us</div>
              <div className="footer-navigation-button">Products</div>
              <div className="footer-navigation-button">Service</div>
              <div className="footer-navigation-button">Contact</div>
            </div>
            <div className="line2"></div>
            <div className="footer-contact-info">
              <ul className="footer-list" style={{listStyleType: 'none'}}>
                <li className="footer-address">
                  <h3>Address:</h3>
                  <p>
                    republic of uzbekistan, tashkent city, oltin topgan street,
                    home-22
                  </p>
                </li>
                <li className="footer-address">
                  <h3>Email:</h3>
                  <p>toshkentplastpolimer@gmail.com</p>
                </li>
                <li className="footer-address">
                  <h3>Phone:</h3>
                  <p>+998 (71) 770 70 70 +998 (71) 770 70 70</p>
                </li>
              </ul>
              <div className="line3"></div>
              <div className="footer-social-media">
                <img
                  src={InstagramIcon}
                  alt=""
                  className="footer-social-icon"
                />
                <img src={FacebookIcon} alt="" className="footer-social-icon" />
                <img src={YoutubeIcon} alt="" className="footer-social-icon" />
                <img src={TwitterIcon} alt="" className="footer-social-icon" />
                <img src={LinkedInIcon} alt="" className="footer-social-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
