import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
// import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  return (
    <div>
      <section className=" z-[999]">
        <nav
          className=" fixed left-0 top-0 z-[999] w-full flex items-center justify-between navbar navbar-expand-lg lg:h-[80px] h-[65px]
            bg-[#ffffff49] dark:bg-[#151515]"
        >
          <div className="container w-full flex items-center justify-between mx-auto">
            <Link
              className="lg:w-[120px] w-full lg:h-[80px] flex items-center h-12"
              onClick={() => setMenu(false)}
              href="/"
            >
              {" "}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M0 0V50H50V0H0ZM25 37.0833L23.0573 35.1389L25 33.1962L26.9444 35.1389L25 37.0833ZM28.4028 36.599L33.1719 41.3681H16.8299L21.5972 36.599L25 40L28.4028 36.599ZM12.9184 25L14.8542 23.0573L16.7969 25L14.8542 26.9427L12.9184 25ZM13.3993 28.4045L8.63368 33.1719V16.8281L13.4028 21.5972L9.99305 25.0035L13.3993 28.4045ZM25 12.9167L26.9444 14.8611L25 16.8038L23.0573 14.8611L25 12.9167ZM21.599 13.401L16.8299 8.63194H33.1719L28.3958 13.401L24.9931 10L21.599 13.401ZM26.4601 18.2621L28.3958 16.3194L33.6736 21.5972L31.7309 23.5417L26.4601 18.2621ZM30.2795 25L25 30.2778L19.7153 25L24.9931 19.7205L30.2795 25ZM23.5347 18.2621L18.2552 23.5417L16.3125 21.5972L21.592 16.3194L23.5347 18.2621ZM18.2552 26.4583L23.5347 31.7378L21.592 33.6806L16.3125 28.4028L18.2552 26.4583ZM26.4531 31.7378L31.7309 26.4583L33.6736 28.4028L28.3958 33.6806L26.4531 31.7378ZM33.1892 25L35.1337 23.0573L37.0764 25L35.1337 26.9427L33.1892 25ZM39.9948 25L36.592 21.5955L41.3611 16.8264V33.1701L36.592 28.401L39.9948 25ZM41.3611 13.9097L35.1337 20.1372L29.8542 14.8594L36.0816 8.6302H41.3611V13.9097ZM13.9115 8.63194L20.1389 14.8611L14.8542 20.1389L8.62674 13.9114V8.63194H13.9115ZM8.63368 36.0885L14.8542 29.8628L20.1337 35.1406L13.9062 41.3681H8.62847L8.63368 36.0885ZM36.0885 41.3681L29.8611 35.1406L35.1406 29.8611L41.368 36.0885V41.3681H36.0885Z"
                    className="dark:fill-white fill-[#151515] "
                  />
                </svg>
              </div>
            </Link>
            <button
              className=" custom-navbar-toggler  md:inline-block inline-block border-0 py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline "
              type="button"
              onClick={() => setMenu(true)}
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#151515] dark:text-white w-8 h-8 "
              />
            </button>
            <div
              className={`${
                menu == true ? "block" : "hidden"
              } bg-white dark:bg-[#151515] py-2  2xl:menu-clapse top-20 right-0 bottom-0 lg:absolute px-20  z-50 lg:w-[100%] h-screen flex xl:justify-end lg:justify-end items-start`}
            >
              <ul className="container relative flex-col w-full pl-16 mx-auto">
              <div className="absolute  2xl:left-[1.5%] lg:left-[2%] top-0 bottom-20 h-full border-l-2"></div>
                <li className="flex justify-end w-full px-3 pt-3 pb-3 text-right lg:pt-0 lg:pb-0 ">
                  <button
                    className={` ${menu == true ? "inline-block" : "hidden"} 
              lg:hidden
                   border-0
                   py-2  px-2.5
                   bg-transparent
                   focus:outline-none
                  focus:ring-0 focus:shadow-none
                  focus:no-underline `}
                    type="button"
                    onClick={() => setMenu(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} className=" w-9 h-9" />
                  </button>
                </li>
                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="w-full" href="/home">
                    <div
                      className={`w-full cursor-pointer lg:text-[96px] Vultura dark:text-[#646464] text-[#D9D9D9] text-[18px] xl:px-3 lg:px-3 px-6  hover:text-[#151515] dark:hover:text-white  ${
                        router.asPath === "/home" &&
                        " text-black dark:text-white"
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Home
                    </div>
                  </Link>
                </li>
                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="w-full" href="/portfolio">
                    <div
                      className={`w-full cursor-pointer lg:text-[96px] Vultura dark:text-[#646464] text-[#D9D9D9] text-[18px] xl:px-3 lg:px-3 px-6  hover:text-[#151515] dark:hover:text-[#fff]  ${
                        router.asPath === "/portfolio" &&
                        " text-black dark:text-white"
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Portfolio
                    </div>
                  </Link>
                </li>
                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="w-full" href="/backstory/backstory">
                    <div
                      className={`w-full cursor-pointer lg:text-[96px] Vultura dark:text-[#646464] text-[#D9D9D9] text-[18px] xl:px-3 lg:px-3 px-6  hover:text-[#151515] dark:hover:text-[#fff]  ${
                        router.asPath === "/backstory/backstory" &&
                        " text-black dark:text-white"
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Backstory
                    </div>
                  </Link>
                </li>
                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="w-full" href="/contact">
                    <div
                      className={`w-full cursor-pointer lg:text-[96px] Vultura dark:text-[#646464] text-[#D9D9D9] text-[18px] xl:px-3 lg:px-3 px-6  hover:text-black dark:hover:text-[#fff]  ${
                        router.asPath === "/contact" &&
                        " text-black dark:text-white"
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Contact
                    </div>
                  </Link>
                </li>{" "}
                <li className="w-full cursor-pointer lg:w-auto nav-item">
                  <Link className="w-full" href="/free-resources">
                    <div
                      className={`w-full cursor-pointer lg:text-[96px] Vultura dark:text-[#646464] text-[#D9D9D9] text-[18px] xl:px-3 lg:px-3 px-6  hover:text-[#151515] dark:hover:text-[#fff]  ${
                        router.asPath === "/free-resources" &&
                        " text-black dark:text-white"
                      }`}
                      onClick={() => setMenu(false)}
                    >
                      Free Resources
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default Header;
