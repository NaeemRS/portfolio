import React from "react";

function footer() {
  return (
    <>
      <section className="mt-[80px] ">
        <div className="  bg-[#ffd800]">
          <div className="container justify-between pr-16 mx-auto md:py-6 xl:py-2 md:flex ">
            <div className="flex-row justify-between md:flex">
              <ul className="flex-row gap-3 font-thin xl:flex">
                <li className="flex items-center gap-3 mt-10 mb-4 md:mt-0 xl:mb-0 xl:mr-5">
                  <img className="w-6 h-6" src="/images/phonelogo.png" />
                  <a className="flex footerfont" href="tel:+1 (646) 458-4222">
                    {" "}
                    +1 (646) 458-4222
                  </a>
                </li>
                <li className="flex items-center gap-3 mb-4 md:mt-0 xl:mb-0 xl:mr-5">
                  <img className="h-5 w-7 " src="/images/envelope.png" />

                  <a
                    className="xl:uppercase footerfont"
                    href="mailto:  info@amazaon-publications.com"
                  >
                    {" "}
                    info@amazaon-publications.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <img className="w-5 h-6" src="/images/map.png" />
                  <a className=" footerfont">
                    {" "}
                    1234 NW Bobcat Lane, St. Robert, MO 65584-5678.
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block md:-mt-28">
              <div className="flex justify-end">
                <img
                  className="h-[12rem] hidden md:block w-[10rem] -mt-[8px] -mr-[35px]"
                  src="/images/manlogo.png"
                />
                <img className="w-24 h-24 md:mt-14" src="/images/amazon.png" />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <div className="text-white bg-[#120A03]">
        <div className="container items-center justify-between pt-10 mx-auto md:flex">
          <div className="flex flex-col">
            <h2 className="text-[24px] leading-none md:text-[48px]">
              Interested in Collaboration?
            </h2>
            <p className="mt-2 mb-2 md:mt-0 md:mb-0">
              Challenge us.We want to work with you to create the really cool
              stuff.
            </p>
          </div>
          <button className="bg-[#f5931e] rounded-full  text-white hover:text-black h-[57px] w-[179px] ">
            Contact Us{" "}
          </button>
        </div>
        <div className="container mx-auto mt-28 md:mt-0 xl:pt-20">
          <div className="gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
            <div className="">
              {" "}
              <div className="">
                <a href="/">
                  <img
                    className="h-8 md:h-12"
                    src="./images/Amazon Publications Logo-02.svg"
                    alt="AmazonPublishigPros"
                  />
                </a>
                <p className="pt-4 font-thin text-justify">
                  Got a book inside you but not sure how to make it happen?
                  We’re here to help. Amazon Publishing Pros is one of the most
                  successful platforms for self-publishing authors. From
                  writing, designing, publishing to distribution – we take care
                  of everything. Becoming an accomplished author has never been
                  easier!
                </p>
              </div>
            </div>
            <div className="justify-center md:flex">
              {" "}
              <div className="">
                <h3 className="text-[28px]">About Us</h3>
                <ul className="pt-2 font-thin">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="about-us">About Us</a>
                  </li>
                  <li>
                    <a href="our-services">Our Services </a>
                  </li>
                  <li>
                    <a href="our-portfolio">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="client-testimonials">Client Testimonial</a>
                  </li>
                  <li>
                    <a href="contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="amazon-publishing-service">Amazon Publishing </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:justify-center md:flex">
              <div className="">
                <h3 className="text-[28px]">Services</h3>
                <ul className="pt-2 font-thin">
                  <li>
                    <a href="book-writing-service">Book Writing Services</a>
                  </li>
                  <li>
                    <a href="audio-book-service">Audio Book Service</a>
                  </li>
                  <li>
                    <a href="book-editing-proofreading-service">
                      Book Proofreading &amp; Editing
                    </a>
                  </li>
                  <li>
                    <a href="book-cover-designing">Book Cover Design</a>
                  </li>
                  <li>
                    <a href="book-illustrations-designing">
                      Book Illustrations
                    </a>
                  </li>
                  <li>
                    <a href="book-publishing-service">
                      Book Publishing Services
                    </a>
                  </li>
                  <li>
                    <a href="book-printing-service">Book Marketing Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              <div className="">
                <h3 className="text-[28px]">Contact Us</h3>
                <ul className="flex flex-col gap-3 pt-2 font-thin">
                  <li className="flex items-start gap-1">
                    <img className="h-4 w-6 mt-1.5" src="/images/mapIcon.png" />
                    <a className="flex" href="/">
                      {" "}
                      999 Riverview Drive - Suite 201, Totowa, NJ 07512
                    </a>
                  </li>
                  <li className="flex gap-2 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi mt-1.5 bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <a href="mailto:  info@amazaon-publications.com">
                      {" "}
                      info@amazaon-publications.com
                    </a>
                  </li>
                  <li className="flex ">
                    <img className="h-4 w-6 mt-1.5" src="/images/mobiel.svg" />
                    <a href="tel:+1 (646) 458-4222"> +1 (646) 458-4222</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container justify-between py-8 mx-auto md:py-16 md:flex ">
          <div className="flex flex-row justify-between">
            <img
              className="w-20 md:mx-2 h-7"
              src="./images/googlePlay.png"
              alt=""
            />
            <img
              className="w-20 md:mx-2 h-7"
              src="./images/scribd.png"
              alt=""
            />
            <img className="w-20 md:mx-2 h-7" src="./images/kobo.png" alt="" />
            <img className="w-20 md:mx-2 h-7" src="./images/ibook.png" alt="" />
            <img className="w-20 md:mx-2 h-7" src="./images/hac.png" alt="" />
          </div>
          <div>
            <p className=" mt-4 md:mt-0  text-[13px]">
              <a href="/Term" className="">
                Terms and Conditions
              </a>{" "}
              <a href="/Policy" className="underline"></a>
              <a className="mx-1">|</a>
              <a href="/Policy" className="">
                Privacy Policy
              </a>
            </p>{" "}
            <p className="  text-[13px]">
              <a href="/Term" className="">
                © 2023 - Amazon Publishing | All right reserved.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bgfooter">
        <div className="p-6   container mx-auto text-[13px] font-thin">
          <p className=" text-[15px] md:text-[18px] text-[#fff]">
            Disclaimer: The logo, name, graphics of AmazonProfs.com are
            trademarks of AmazonProfs and are not related to Amazon Inc, in any
            way. All other respective company names, brand names, trademarks and
            logos mentioned on this website are the properties of their
            respective owners and do not constitute or imply endorsement,
            affiliation or sponsorship with AmazonProfs.
          </p>
        </div>
      </div>
    </>
  );
}

export default footer;
