import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/popProduct.css";
import Chelak from "../images/chelak-2.svg";

const PopProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next + 1),
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
        //   centerMode: true,
        //   centerPadding: "30px",
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "220px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "170px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "35px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  const totalSlides = 7;
  return (
    <div className="PopProduct">
      <div className="PopProduct-container">
        <h1 className="pro-title">our most popular products</h1>
        <Slider className="PopProduct-slide" {...settings}>
          <div className="slide-item">
            <h3 className="item-title">brolyer box</h3>
            <img src={Chelak} alt="" />
            <div className="product-details">
              <div className="details-info">
                <span className="details-info-label">size</span>
                <span className="details-info-label">price</span>
              </div>
              <div className="product-variants">
                <button className="variant-button">20 l</button>
                <p className="variant-price">29 000 so’m</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <h3 className="item-title">brolyer box</h3>
            <img src={Chelak} alt="" />
            <div className="product-details">
              <div className="details-info">
                <span className="details-info-label">size</span>
                <span className="details-info-label">price</span>
              </div>
              <div className="product-variants">
                <button className="variant-button">20 l</button>
                <p className="variant-price">29 000 so’m</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <h3 className="item-title">brolyer box</h3>
            <img src={Chelak} alt="" />
            <div className="product-details">
              <div className="details-info">
                <span className="details-info-label">size</span>
                <span className="details-info-label">price</span>
              </div>
              <div className="product-variants">
                <button className="variant-button">20 l</button>
                <p className="variant-price">29 000 so’m</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <h3 className="item-title">brolyer box</h3>
            <img src={Chelak} alt="" />
            <div className="product-details">
              <div className="details-info">
                <span className="details-info-label">size</span>
                <span className="details-info-label">price</span>
              </div>
              <div className="product-variants">
                <button className="variant-button">20 l</button>
                <p className="variant-price">29 000 so’m</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <h3 className="item-title">brolyer box</h3>
            <img src={Chelak} alt="" />
            <div className="product-details">
              <div className="details-info">
                <span className="details-info-label">size</span>
                <span className="details-info-label">price</span>
              </div>
              <div className="product-variants">
                <button className="variant-button">20 l</button>
                <p className="variant-price">29 000 so’m</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <h3 className="item-title">brolyer box</h3>
            <img src={Chelak} alt="" />
            <div className="product-details">
              <div className="details-info">
                <span className="details-info-label">size</span>
                <span className="details-info-label">price</span>
              </div>
              <div className="product-variants">
                <button className="variant-button">20 l</button>
                <p className="variant-price">29 000 so’m</p>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <h3 className="item-title">brolyer box</h3>
            <img src={Chelak} alt="" />
            <div className="product-details">
              <div className="details-info">
                <span className="details-info-label">size</span>
                <span className="details-info-label">price</span>
              </div>
              <div className="product-variants">
                <button className="variant-button">20 l</button>
                <p className="variant-price">29 000 so’m</p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="slides-number">
          <p>
            {currentSlide} - {totalSlides}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopProduct;
