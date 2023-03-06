import React from "react";

export default function Footer2() {
  return (
    <div>
      <footer className=" bg-white dark:bg-[#151515]">
        <div className="container px-6 pt-10 pb-6 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full text-center md:w-1/4 md:text-left">
              <img className="mb-6 font-bold uppercase" />
              <p>Bringing your creative imagination to life.</p>
              <ul className="flex mb-4">
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    <img
                      className="w-8 md:mx-2 h-7"
                      src="./images/googlePlay.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    <img
                      className="w-8 md:mx-2 h-7"
                      src="./images/scribd.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    <img
                      className="w-8 md:mx-2 h-7"
                      src="./images/kobo.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center w-full text-center md:w-2/4 ">
              <div className="w-full border-b border-[#646464] mr-60"></div>
            </div>
            <div className="w-full text-center md:w-1/4 md:text-left">
              <h5 className="mb-6 font-bold uppercase">Company</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    Portfolio
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    Backstory
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    Free Resources
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className=" hover:underline hover:text-blue-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
