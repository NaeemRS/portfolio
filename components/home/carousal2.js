import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
// import { customCurrentSlideLeft } from "react-slick-carousel/lib/default-props";
export default function Carousal2() {
  const [imageIndex, setImageIndex] = useState(0);
  const Carousals = [
    {
      Image: "images/home/services1.png",
      content: " Social Media Designing",
    },
    {
      Image: "images/home/services2.png",
      content: "UI Designing",
    },
    {
      Image: "images/home/services3.png",
      content: "Packaging Designing",
    },
    {
      Image: "images/home/services4.png",
      content: "Print Media Designing",
    },
    {
      Image: "images/home/services5.png",
      content: "NFT Designing",
    },
    {
      Image: "images/home/services4.png",
      content: "Print Media Designing",
    },
    {
      Image: "images/home/services3.png",
      content: "Packaging Designing",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <img src="/images/home/arrow-right.svg" className="w-30" />,
    prevArrow: <img src="/images/home/arrow-left.svg" className="w-30" />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="px-4">
        <div className="container ml-auto">
          <Slider
            className="grid-cols-4 gap-3 gallery-carousal custom grig"
            {...settings}
          >
            {Carousals.map((Carousals, idx) => {
              return (
                <>
                  <div id="gallery" className="relative gallery">
                    <div>
                      <h6 className="absolute z-50 w-full grayscale text-white font-semibold Codec-Pro text-center bottom-[30px] px-12 text-[22px]">
                        {Carousals.content}
                      </h6>
                    </div>{" "}
                    <div className="m-2 h-[370px] flex justify-center ">
                      <img src={Carousals.Image} className="w-full grayscale" />
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}
