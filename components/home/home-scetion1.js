import React from "react";

export default function HomeScetion1() {
  return (
    <div>
      {" "}
      <section className="flex items-center justify-center pt-32 inner_page_banner">
        <div className="mt-5">
          <h1 className="2xl:text-[400px] lg:text-[350px] md:text-[250px] text-[200px] home-heading text-[#fff] uppercase">
            Meet Usama
          </h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container lg:ml-auto">
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-3 2xl:pr-40 lg:pr-10 md:pr-7">
              <h1 className="2xl:text-[70px] lg:text-[70px] md:text-[50px] text-[30px] Vultura">
                Lorem
                <span className="Vultura-stroke"> Ipsum</span>
              </h1>
              <p className="Codec-Pro 2xl:text-[22px] lg:text-lg md:text-[16px] text-sm">
                As a skilled Graphic Designer, I've dedicated the last five
                years to bringing the visions of corporate clients to life
                through stunning visual representations. With extensive
                experience working on national and multi-national projects, I
                have a proven track record of delivering creative solutions that
                effectively communicate brand messages and ideas. Let's partner
                up and tackle your next project together. With my extensive
                experience, I am confident that I can help you find a creative
                solution to your challenge and attract the attention of your
                target audience. Let's make your brand stand out and leave a
                lasting impression.
              </p>
            </div>
            <div className="w-1/2">
              <img src="/images/home/bg-group-banner.svg" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
