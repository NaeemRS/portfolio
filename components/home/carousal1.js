import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
export default function Carousal1() {
  const Carousals = [
    {
      Image: "/images/home/carousal-img1.svg",
    },
    {
      Image: "/images/home/carousal-img2.svg",
    },
    {
      Image: "/images/home/carousal-img3.svg",
    },
    {
      Image: "/images/home/carousal-img1.svg",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <img src="/images/home/arrow-right.svg" className="w-30" />,
    prevArrow: <img src="/images/home/arrow-left.svg" className="w-30" />,
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
    <div className="py-20 pt-0 overflow-hidden">
      <div className="relative container-fluid">
        <div className="absolute -bottom-[50px] right-5 text-center">
          <button
            type="button"
            className="inline-block px-7 py-3  bg-transparent  font-medium text-sm leading-snug rounded border border-[#646464] hover:bg-transparent  focus:bg-transparent  focus:outline-none focus:ring-0 active:bg-transparent transition duration-150 ease-in-out"
          >
            Read More
          </button>
        </div>
        <Slider className="grid grid-cols-1 Carousal1" {...settings}>
          {Carousals.map((Carousals, idx) => {
            return (
              <>
                <div className="p-2 m-2 overflow-hidden ">
                  <img className="" src={Carousals.Image} />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
