import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../HomeSlider/img/handbag-.jpg';
import img1 from '../HomeSlider/img/clothes.jpg';
import img2 from '../HomeSlider/img/clothes1.jpg';

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="container">
        <div className="row gx-0 m-3">
          <Slider {...settings}>
            <div className="col-md-8">
              <div>
                <img className='' style={{ width: "100%", height: "400px" }} src={img} alt="slider" />
              </div>
            </div>

            <div className="col-md-4">
              <div>
                <img style={{ width: "100%", height: "200px" }} src={img1} alt="slider" />
              </div>
              <div>
                <img style={{ width: "100%", height: "200px" }} src={img2} alt="slider" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
