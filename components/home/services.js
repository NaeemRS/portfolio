import React from "react";
import Card from "./card";
import Carousal1 from "./carousal1";
import Carousal2 from "./carousal2"; 
export default function Services() {
  return (
    <>
      <div className="my-6 ">
        <div className="container ml-auto">
          <div className="mt-5">
            <h1 className="2xl:text-[70px] lg:text-[70px] md:text-[50px] text-[30px] Vultura">Services</h1>
          </div>
        </div>
        <Carousal2 />
      </div>
    </>
  );
}
