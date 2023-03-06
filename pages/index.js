import Link from "next/link";
import React, { useState } from "react";

export default function index() {
  return (
    <>
      <div class="  inner_page_banner home-banner-section relative w-full overflow-hidden  lg:h-screen h-screen flex justify-center items-center">
        <div
          class="parallax-effect"
          style={{ transform: "translateY(-0.0171361px)" }}
        ></div>
        <div className=" absolute z-30 lg:block hidden right-20 bottom-10">
          <div className="">
            <div class="rotating-border rotating-border--black-white  rotating-border--reverse">
              <img
                className="w-[120px] h-[120px]"
                src="/images/home/roundimg.svg"
              />
            </div>
          </div>
        </div>

        <div className="home-title-div absolute  group-hover:grtransition group-hover:duration-700 group-hover:ease-in-out group-hover:animation z-20 group">
          <img
            className="group-hover:hidden inline-block md:w-[200px] w-[70px]  group-hover:grtransition group-hover:duration-700 group-hover:ease-in-out group-hover:animation"
            src="/images/home/hover-img-home.svg"
          />
          <h1 className="hidden group-hover:inline-block group-hover:transition group-hover:duration-700 group-hover:ease-in-out group-hover:animation 2xl:text-[200px] text-center text-white  lg:text-[120px] md:text-[60px] text-[30px] Vultura">
            <p className="md:text-[30px] text-xl">Designing with a passion,</p>
            <p>not just a 9-5</p>
          </h1>
        </div>
        <div className=" px-0 w-full container-fluid">
          <div className="flex w-full relative ">
            <div className=" flex items-center justify-center 2xl:w-2/3 lg:w-2/3">
              <Link
                href="/backstory"
                className=" flex items-center  group absolute lg:left-[8%] 2xl:left-[10%] left-1 bg-transparent h-20 w-auto rounded-full"
              >
                {/* backstory */}
                <img className="md:w-auto w-10" src="/images/Arrow-left.svg" />
              </Link>

              <Link
                href="/portfolio"
                className="banner-btn1 flex items-center justify-center group absolute lg:right-[8%] right-1 2xl:right-[10%]  bg-transparent h-20 w-auto rounded-full"
              >
                {/* Portfolio */}{" "}
                <img className="md:w-auto w-10" src="/images/Arrow-right.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
