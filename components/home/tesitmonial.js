import React from 'react'

export default function Tesitmonial() {
  return (
    <>
        
        <div class="container mx-auto">
          <div className="py-20">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4">
              <div class="bg-white rounded shadow w-full px-2 hover-div grid grid-cols-1 items-center ">
                <div class=" py-2 ">
                  <p class="text-gray-800 text-base px-6 mb-5">
                    Monitoring and tracking my health vitals anywhere I go and
                    on any platform I use has never been easier.
                  </p>
                  <p class="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
                </div>
              </div>
              <div class="bg-white rounded shadow w-full px-2 hover-div grid grid-cols-1 items-center ">
                <div class=" py-2 ">
                  <p class="text-gray-800 text-base px-6 mb-5">
                    As an Athlete, this is the perfect product for me. I wear my
                    Smart Health Monitoring Wristwatch everywhere I go, even in
                    the bathroom since it's waterproof.
                  </p>
                  <p class="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
                </div>
              </div>
              <div class="bg-white rounded shadow w-full px-2 hover-div grid grid-cols-1 items-center ">
                <div class=" py-2 ">
                  <p class="text-gray-800 text-base px-6 mb-5">
                    I don't regret buying this wearble gadget. One of the best
                    gadgets I own!.
                  </p>
                  <p class="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
