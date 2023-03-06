import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Backstory() {
  return (
    <>
      <section className="py-20">
        <div className="container lg:mr-auto">
          <div className="flex flex-wrap items-center w-full">
            <div className="w-full lg:w-1/2 md:w-1/2">
              <img src="/images/home/bg-group-banner.svg" className="w-full" />
            </div>
            <div className="w-full pl-3 lg:w-1/2 md:w-1/2 2xl:pl-40 lg:pl-10 md:pl-7">
              <h1 className="2xl:text-[70px] lg:text-[70px] md:text-[50px] text-[30px] Vultura">
                Backstory
              </h1>
              <p className="Codec-Pro 2xl:text-[22px] lg:text-lg md:text-[16px] text-sm">
                I'm Usama Maqsood, a Creative/Lead Designer with five years
                under my belt and more to come. My journey in this field was far
                from a walk in the park, but I can tell you this - those
                challenges were the very thing that shaped me into the designer
                I am today.
              </p>
              <Link className="flex justify-between py-1 border-b w-28" href="">
                Keep Reading{" "}
                <FontAwesomeIcon icon={faArrowRight} className="w-3 " />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
