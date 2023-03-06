import React from "react";
import Card from "./card";
import Carousal1 from "./carousal1";
import Carousal2 from "./carousal2";

export default function HomeTabs() {
  return (
    <>
      <div className="my-6 ">
    
        <div className="container ml-auto">
        <div className="mt-5">
          <h1 className="2xl:text-[70px] lg:text-[70px] md:text-[50px] text-[30px] Vultura">Work</h1>
        </div>
          <ul
            className="flex flex-col flex-wrap gap-2 pl-0 mb-4 list-none border-b-2 nav nav-tabs Codec-Pro md:flex-row"
            id="tabs-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-home"
                className="
      nav-link
      block
      font-medium
      lg:text-[24px]
      md:text-lg
      text-sm
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-0
      py-3
      my-2
      hover:border-transparent 
      focus:border-transparent
      active
    "
                id="tabs-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-home"
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
              >
                Social Media
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-uidesigns"
                className="
      nav-link
      block
      font-medium
      lg:text-[24px]
      md:text-lg
      text-sm
      leading-tight
      border-x-0 border-t-0 border-b-2 border-transparent
      px-0
      py-3
      my-2
      hover:border-transparent 
      focus:border-transparent
    "
                id="tabs-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-uidesigns"
                role="tab"
                aria-controls="tabs-uidesigns"
                aria-selected="false"
              >
                UI Designs
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-packaging"
                className="
                 
                  dark:active:text-white
                 text-[#646464]
                  nav-link
                block
                font-medium
                lg:text-[24px]
                md:text-lg
                text-sm
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
                px-0
                py-3
                my-2
                hover:border-transparent 
                focus:border-transparent"
                id="tabs-packaging-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-packaging"
                role="tab"
                aria-controls="tabs-packaging"
                aria-selected="false"
              >
                Packaging
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-nfttokens"
                className="
                 
                  dark:active:text-white
                 text-[#646464]
                  nav-link
                block
                font-medium
                lg:text-[24px]
                md:text-lg
                text-sm
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
                px-0
                py-3
                my-2
                hover:border-transparent 
                focus:border-transparent"
                id="tabs-nfttokens-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-nfttokens"
                role="tab"
                aria-controls="tabs-nfttokens"
                aria-selected="false"
              >
                NFT Tokens/Coins
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-brochure"
                className="
                 
                  dark:active:text-white
                 text-[#646464]
                  nav-link
                block
                font-medium
                lg:text-[24px]
                md:text-lg
                text-sm
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
                px-0
                py-3
                my-2
                hover:border-transparent 
                focus:border-transparent"
                id="tabs-brochure-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-brochure"
                role="tab"
                aria-controls="tabs-brochure"
                aria-selected="false"
              >
                Brochure/Flyers
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#tabs-animations"
                className="
                 
                  dark:active:text-white
                 text-[#646464]
                  nav-link
                block
                font-medium
                lg:text-[24px]
                md:text-lg
                text-sm
                leading-tight
                border-x-0 border-t-0 border-b-2 border-transparent
                px-0
                py-3
                my-2
                hover:border-transparent 
                focus:border-transparent"
                id="tabs-animations-tab"
                data-bs-toggle="pill"
                data-bs-target="#tabs-animations"
                role="tab"
                aria-controls="tabs-animations"
                aria-selected="false"
              >
                Animations
              </a>
            </li>
          </ul>
        </div>
        <div className="container-fluid ">
          <div className="tab-content" id="tabs-tabContent">
            <div
              className="tab-pane fade show active"
              id="tabs-home"
              role="tabpanel"
              aria-labelledby="tabs-home-tab"
            >
              <Carousal1 />
            </div>
            <div
              className="tab-pane fade"
              id="tabs-uidesigns"
              role="tabpanel"
              aria-labelledby="tabs-uidesigns-tab"
            >
              <Card />
            </div>
            <div
              className="tab-pane fade"
              id="tabs-nfttokens"
              role="tabpanel"
              aria-labelledby="tabs-nfttokens-tab"
            >
              <Carousal2 />
            </div>
            <div
              className="tab-pane fade"
              id="tabs-packaging"
              role="tabpanel"
              aria-labelledby="tabs-packaging-tab"
            >
              <Card />
            </div>
            <div
              className="tab-pane fade"
              id="tabs-brochure"
              role="tabpanel"
              aria-labelledby="tabs-brochure-tab"
            >
              <Carousal1 />
            </div>
            <div
              className="tab-pane fade"
              id="tabs-animations"
              role="tabpanel"
              aria-labelledby="tabs-animations-tab"
            >
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
