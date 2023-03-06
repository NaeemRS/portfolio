import React from "react";

export default function Form() {
  return (
    <>
      <section className="py-20">
        <div className="container relative lg:ml-auto">
          <div className="absolute top-0 w-[65%]">
            <h1 className="2xl:text-[50px] lg:text-[50px] md:text-[30px] text-[20px] Vultura">
              Don't be left in the dark. <br />
              <span className="Vultura-stroke">
                {" "}
                Don't be left in the dark, Reach out and let's shed some light
                on your project.
              </span>
            </h1>
          </div>
          <div className="flex items-end w-full">
            <div className="w-full mb-12 2xl:w-[45%] lg:w-[45%] md:w-1/2 md:mb-0 ">
              <form className="2xl:pr-10 lg:pr-8 md:pr-6">
                <div className="grid grid-cols-1 gap-2 mb-6 md:grid-cols-2 ">
                  <div>
                    <label for="" className="text-[22px] Codec-Pro">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control block w-full px-4 mt-2 py-2 text-xl font-normal  bg-transparent bg-clip-padding border border-solid border-[#646464] rounded transition ease-in-out m-0  focus:bg-transparent focus:border-[#646464] focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label for="" className="text-[22px] Codec-Pro">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="form-control block w-full px-4 mt-2 py-2 text-xl font-normal  bg-transparent bg-clip-padding border border-solid border-[#646464] rounded transition ease-in-out m-0  focus:bg-transparent focus:border-[#646464] focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-full mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="inline-block mb-2 form-label text-[22px] Codec-Pro"
                    >
                      Example textarea
                    </label>
                    <textarea
                      className="
                      h-[160px]
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        
        bg-transparent bg-clip-padding
        border  border-[#646464]
        rounded
        transition
        ease-in-out
        m-0
         focus:bg-transparent focus:border-[#646464] focus:outline-none
      "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3  bg-transparent  font-medium text-sm leading-snug rounded border border-[#646464] hover:bg-transparent  focus:bg-transparent  focus:outline-none focus:ring-0 active:bg-transparent transition duration-150 ease-in-out"
                  >
                    Read More
                  </button>
                </div>
              </form>
            </div>
            <div className="2xl:w-[55%] lg:w-[55%] ">
              <img src="/images/home/form-img.svg" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
