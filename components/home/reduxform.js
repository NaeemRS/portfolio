import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
// import { customCurrentSlideLeft } from "react-slick-carousel/lib/default-props";
export default function Reduxform() {
  const [imageIndex, setImageIndex] = useState(0);
  const Carousals = [
    {
      Image: "images/teamwork.jpeg",
    },
    {
      Image: "images/teamwork.jpeg",
    },
    {
      Image: "images/teamwork.jpeg",
    },
    {
      Image: "images/teamwork.jpeg",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
    beforeChange: (current, next) => setImageIndex(next),
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className="container mx-auto">
      <Slider className="grid-cols-4 gap-3 custom grig" {...settings}>
        {Carousals.map((Carousals, idx) => {
          return (
            <>
              <div id="gallery">
                <div className="m-2">
                  <img src={Carousals.Image} class="grayscale" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
