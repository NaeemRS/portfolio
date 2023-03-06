// import Cursor from '@/components/home/cursor'
// import React from 'react'

// export default function backstory() {
//   return (
//     <section className="py-20">
//     <div className="container mx-auto">
//     <div className='container mx-auto'><Cursor /> </div>
//     </div>
//     </section>

//   )
// }

import Link from "next/link";
import React, { useState } from "react";

export default function Portfolio() {
  return (
    <>
      <div className="bg-[#151515] home-banner-section relative w-full overflow-hidden  lg:h-screen h-screen flex justify-center items-center">
        <div className=" absolute z-30 g:block hidden right-20 bottom-3">
          <div className="">
            <div class="rotating-border rotating-border--black-white  rotating-border--reverse">
              <img
                className="w-[120px] h-[120px]"
                src="/images/home/roundimg.svg"
              />
            </div>
          </div>
        </div>

        <h1 className="absolute 2xl:right-[15%] lg:right-[15%]  2xl:text-[200px] text-center text-white z-20 lg:text-[120px] md:text-[60px] text-[30px] ">
          <Link
            href="/portfolio/portfolio"
            className="Vultura-stroke  hover:Vultura-stroke "
          >
            Portfolio
          </Link>
        </h1>
        <div className=" px-0 w-full container-fluid">
          <div className="flex w-full relative ">
            <div className=" flex items-center justify-center 2xl:w-2/3 lg:w-2/3">
              <Link
                href="/backstory"
                className=" flex items-center left-3  group absolute lg:left-[8%] 2xl:left-[10%]  bg-transparent h-20 w-auto rounded-full"
              >
                <img className="md:w-auto w-10" src="/images/Arrow-left.svg" />
              </Link>
              <img src="/images/banner-left.png" className="w-full  h-screen" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
