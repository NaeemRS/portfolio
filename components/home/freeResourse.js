import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
export default function RreeResourse() {
  const Carousals = [
    {
      Image: "/images/home/resourse1.svg",
    },
    {
      Image: "/images/home/resourse2.svg",
    },
    {
      Image: "/images/home/resourse3.svg",
    },
    {
      Image: "/images/home/resourse4.svg",
    },
    {
      Image: "/images/home/resourse5.svg",
    },
    {
      Image: "/images/home/resourse3.svg",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <img src="/images/home/arrow-right.svg" className="w-30" />,
    prevArrow: <img src="/images/home/arrow-left.svg" className="w-30" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
      <div className="container relative ml-auto">
       
        <h1 className="2xl:text-[70px] lg:text-[70px] md:text-[50px] text-[30px] Vultura">
          Free Resources
        </h1>

        <Slider className="grid grid-cols-1 Free-Resources" {...settings}>
          {Carousals.map((Carousals, idx) => {
            return (
              <>
                <div id="gallery" className="relative gallery">
                  <div>
                    <h6 className="absolute z-50 w-full grayscale text-white font-semibold Codec-Pro text-center bottom-[30px] px-12 text-[22px]">
                      {Carousals.content}
                    </h6>
                  </div>{" "}
                  <div className="m-2 h-[300px] flex justify-center ">
                    <img src={Carousals.Image} className="w-full grayscale" />
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <div className="mr-2 text-right">
          <button
            type="button"
            className="inline-block overflow-hidden z-[99] px-7 py-3  bg-transparent  font-medium text-sm leading-snug  rounded border border-[#646464] hover:bg-transparent  focus:bg-transparent  focus:outline-none focus:ring-0 active:bg-transparent transition duration-150 ease-in-out"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
