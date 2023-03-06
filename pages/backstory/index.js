import Link from "next/link";
import React, { useState } from "react";

export default function Index() {
  return (
    <>
      <div className="bg-[#151515] home-banner-section relative w-full overflow-hidden  lg:h-screen h-screen flex justify-center items-center">
        <div className=" absolute z-30 right-20 bottom-10">
          <div className="">
            <div class="rotating-border rotating-border--black-white  rotating-border--reverse">
              <img
                className="w-[120px] h-[120px]"
                src="/images/home/roundimg.svg"
              />
            </div>
          </div>
        </div>

        <h1 className="absolute 2xl:right-[30%] lg:right-[40%]  2xl:text-[200px] text-center text-white z-20 lg:text-[120px] md:text-[60px] text-[30px] Vultura">
          <Link href="/backstory/backstory">Backstory</Link>
        </h1>
        <div className=" px-0 w-full container-fluid">
          <div className="flex w-full relative justify-end">
            <div className=" flex items-center  2xl:w-2/3 lg:w-2/3">
              <div className="absolute my-10 lg:left-[8%] 2xl:left-[11%] top-20 bottom-20 h-[65%] border-l"></div>

              <img src="/images/banner-right.png" className="w-full  h-full" />
              <Link
                href="/portfolio"
                className=" flex items-center justify-center group absolute lg:right-[8%] 2xl:right-[10%] right-0  bg-transparent h-20 w-auto rounded-full"
              >
                {/* Portfolio */} <img src="/images/Arrow-right.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
