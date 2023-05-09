import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import one from "../../Assets/sponsors/pic (2).jpg";
import two from "../../Assets/sponsors/pic.jpg";
import three from "../../Assets/sponsors/pic1.jpg";
import four from "../../Assets/sponsors/pic3 (3).jpg";
import five from "../../Assets/sponsors/pic4.jpg";
import six from "../../Assets/sponsors/pic5.jpg";
import seven from "../../Assets/sponsors/pic6.jpg";
import eight from "../../Assets/sponsors/pic7.jpg";
import nine from "../../Assets/sponsors/pic8.jpg";
import ten from "../../Assets/sponsors/pic9.jpg";
import eleven from "../../Assets/sponsors/pic10.jpg";

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
  };

  return (
    <div className="py-10">
      
      <Slider {...settings}>
        <div>
          <img className="w-20 mx-5 rounded-full" src={one} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={two} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx- rounded-full" src={three} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx- rounded-full" src={four} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={five} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={six} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={seven} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={eight} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={nine} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={ten} alt="logo" />
        </div>
        <div>
          <img className="w-20 mx-5 rounded-full" src={eleven} alt="logo" />
        </div>
      </Slider>
    </div>
  );
};

export default Sponsors;
