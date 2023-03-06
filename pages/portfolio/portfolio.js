import Link from "next/link";
import React, { useState } from "react";

export default function Portfolio() {
  return (
    <>
      <div className="relative flex items-center justify-center w-full h-screen overflow-hidden  lg:h-screen">
        <div className="w-full px-0  container-fluid">
          <div className="absolute my-10 lg:left-[7%] 2xl:left-[11%] top-2  h-[80%] border-l-2"></div>
          <div className="container w-full px-0 ml-auto ">
            <div className="relative flex  w-full">
              <div className="flex items-center  2xl:w-2/3 lg:w-2/3">
                <div className="flex items-end w-full h-screen">
                  <h1 className=" mb-12  2xl:text-[200px] dark:text-white z-20 lg:text-[120px] md:text-[60px] text-[30px] Vultura">
                    Portfolio
                    <p className="Codec-Pro lg:text-[30px] md:text-xl text-lg text-[#646464]">
                      Hey! Thanks or sticking around. <br />
                      This is my story or at least a portion of one. Let's
                      <br /> start!{" "}
                    </p>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-10 pb-0">
        <div className="container w-full px-0 ml-auto ">
          <div className="">
            <img
              src="/images/backstory-image.png"
              className="w-full  h-[500px]"
            />
          </div>
        </div>

        <div className="container w-full px-0 ml-auto ">
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg leading-[60px] ">
                {" "}
              </p>
            </div>
            <div className="w-5/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                I'm Usama Maqsood, a Creative/Lead Designer with five years
                under my belt and more to come. My journey in this field was far
                from a walk in the park, but I can tell you this - those
                challenges were the very thing that shaped me into the designer
                I am today.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg leading-[60px] font-semibold">
                2017 ---{" "}
              </p>
            </div>
            <div className="w-5/6">
              <h5 className="font-semibold  lg:text-[20px] md:text-xl text-lg">
                Beginning
              </h5>
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                <br />I finished my Matriculation in 2017. Following that, I
                enrolled in a short-hand language and English language course.
                It was a six-month course. Although English is not our native
                language, I liked learning two new ones. I studied short-hand to
                land a position in the government, but I was unsuccessful. Maybe
                God wanted me to be a designer. I was also messing around with
                Photoshop in my free time. After completing the short-hand
                course, the head of the institute hired me as a tutor. The
                following five months I spent working there. I had to quit since
                I couldn't hold on to a job and attend college altogether.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg  leading-[60px] font-semibold">
                2018 ---{" "}
              </p>
            </div>
            <div className="w-5/6">
              <h5 className="font-semibold lg:text-[20px] md:text-xl text-lg">
                A Bumpy Ride
              </h5>
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                <br />I finished my Matriculation in 2017. Following that, I
                enrolled in a short-hand language and English language course.
                It was a six-month course. Although English is not our native
                language, I liked learning two new ones. I studied short-hand to
                land a position in the government, but I was unsuccessful. Maybe
                God wanted me to be a designer. I was also messing around with
                Photoshop in my free time. After completing the short-hand
                course, the head of the institute hired me as a tutor. The
                following five months I spent working there. I had to quit since
                I couldn't hold on to a job and attend college altogether.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container w-full px-0 ml-auto ">
          <div className="flex">
            <div className="ml-auto w-1/2">
              <img
                src="/images/banner-left.png"
                className="w-full  h-[500px]"
              />
            </div>
          </div>
        </div>

        <div className="container w-full px-0 ml-auto ">
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg leading-[60px] ">
                {" "}
              </p>
            </div>
            <div className="w-5/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                One of my cousins was running an IT company called InovaSol. He
                offered me a job to work in his company as a BDM(Business
                Development Manager). I took that opportunity and started
                working with him. In his company, I was also working on my
                Designing skills. Thanks to him, I was able to sharpen my design
                skills. He had several designers in his company they also helped
                me a lot.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg selection:leading-[60px] font-semibold">
                2019 ---{" "}
              </p>
            </div>
            <div className="w-5/6">
              <h5 className="font-semibold lg:text-[20px] md:text-xl text-lg">
                Leap of Faith
              </h5>
              <div className="w-full items-end flex py-3">
                <div className="w-2/5 py-3">
                  <img
                    src="/images/banner-left.png"
                    className="w-full  h-[500px]"
                  />
                </div>
                <div className="w-3/5 py-3 pl-16">
                  <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                    <br />I was lost and uncertain about my mindset and life
                    goals. Despite that, I took a leap of faith and left
                    InovaSol to work as a CSR for a friend's business. The
                    experience was enjoyable, with friends and a steady income.
                    However, as time passed, I couldn't shake the feeling that
                    something was missing. I still couldn't figure out what was
                    lacking in my life, even after a year had passed. I realized
                    I needed to take control of my direction and find
                    fulfillment in my career. It was then that I knew I had to
                    embark on a journey of self-discovery to solve what truly
                    brings me joy and purpose. I was determined to find my
                    calling and make the most of my life, no matter how long it
                    took.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lgleading-[60px] font-semibold">
                2020 ---{" "}
              </p>
            </div>
            <div className="w-5/6">
              <h5 className="font-semibold lg:text-[20px] md:text-xl text-lg">
                Rewarding Year
              </h5>
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                <br />
                In 2020 I was rehired by InovaSol as a BDM. Because of COVID, I
                was working the night shift. My skill set was stable, but my
                family's financial situation was still unstable. I have proved
                my skills as a designer. At that time, I switched from being a
                BDM to a Junior designer. And that was the best decision I have
                ever made. I started working for various businesses as their
                social media creative designer under the roof of Codesk. I have
                worked for Politicians, Restaurants, and mainly I worked for
                Real estate. The finest year for my personal development was
                2020. We relocated our offices and switched the company's name
                from InovaSol to Codesk. I have worked on so many projects by
                that time. My designing skills were getting better and better
                with each passing month. And then, I was assigned to a Packaging
                Design Project. This project was a significant challenge because
                I wasn't familiar with packaging design. I began my research and
                testing, gathering more information and inspiration. After
                refining my testing, I began to sketch and storyboard each
                element. This project was well over four months. I enjoyed every
                second of working on it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container w-full px-0 ml-auto ">
          <div className="flex w-full pb-10 gap-16 ">
            <div className="w-2/3">
              <img
                src="/images/banner-left.png"
                className="w-full  h-[500px]"
              />
            </div>
            <div className="w-1/3">
              <img
                src="/images/banner-left.png"
                className="w-full  h-[500px]"
              />
            </div>
          </div>
        </div>

        <div className="container w-full px-0 ml-auto ">
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg leading-[60px] font-semibold">
                2021 ---{" "}
              </p>
            </div>
            <div className="w-5/6">
              <h5 className="font-semibold lg:text-[20px] md:text-xl text-lg">
                New Skills Set
              </h5>
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                <br />I was getting into the rhythm and giving my best in every
                project. I was having fun designing and feeling good about my
                work. Every project received my all-out effort, and I completed
                every one. After a few months Company received an animation
                project. They wanted us to make an Explainer Video. At that
                time, I was only familiar with Photoshop and Illustrator. I know
                nothing about Explainer videos, animation, or After Effects. I
                had a week to become familiar with the software and gather
                knowledge on explainer videos. I'm lucky that everything I need
                to know is available on the internet nowadays. I learned about
                After Effects thanks to the GFX Mentor YouTube channel. And I
                learned about explainer videos from the Motion Array YouTube
                channel. I suggest watching these videos if you want to learn
                more about After Effects or Explainer videos. After finishing my
                research, I wrote down the script and began outlining the
                animation's frames. We sent the draught outline frames for the
                client's approval. After the client's permission, I started
                designing and animating those frames following the outline
                drawing. It took me almost 35 to 40 working days to complete the
                animation. That was the biggest gig I did after the packaging
                design project. Even though I only had a week to study after
                effects, I'm still proud of the animation I was able to create.
              </p>
            </div>
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg leading-[60px] font-semibold"></p>
            </div>
            <div className="w-5/6">
              <div className=" py-3">
                <img
                  src="/images/banner-left.png"
                  className="w-full  h-[500px]"
                />
              </div>
              <h5 className="font-semibold mt-3 italic inline-block lg:text-[20px] md:text-xl text-lg">
                The 25th of June 2021
              </h5>
              <span> was my final day working at Codesk</span>
              <br />
              <h5 className="font-semibold italic inline-block lg:text-[20px] md:text-xl text-lg">
                On the 28th of June 2021,
              </h5>
              <span> I joined ReactiveSpace.</span>
            </div>
          </div>
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg leading-[60px] font-semibold">
                2022 ---{" "}
              </p>
            </div>
            <div className="w-5/6">
              <h5 className="font-semibold lg:text-[20px] md:text-xl text-lg">
                New Skills Set
              </h5>
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                <br />I was assigned to produce social media material as a part
                of the ReactiveSpace blockchain development team. Despite having
                no prior knowledge of blockchain, I quickly immersed myself in
                the industry, learning about it through hands-on experience. My
                role involved designing various promotional materials, such as
                animated advertisements, social media ads, flyers, proposals,
                and branding. I also gained expertise in UI design, working on
                the interfaces of blockchain websites and NFT marketplaces. I
                learned more about blockchain technology and UI design by
                working on these projects and improving my skills.
              </p>
              <p className="Codec-Pro lg:text-[20px] italic md:text-xl text-lg text-[#151515]">
                <br />
                "With every obstacle overcome and every battle won, I stand
                tall, unbreakable and unshaken, as a testament to the power of
                perseverance and inner strength."
              </p>
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                <br />
                I've been attempting to create my website for the past six
                months. And because of Mr. Burns' journey, I was inspired to
                start writing my journey.
              </p>
              <p className="Codec-Pro lg:text-[20px] italic md:text-xl text-lg text-[#151515]">
                <br />
                <b>
                  I want to express my gratitude to everyone who has supported
                  me and believed in me during my journey.
                </b>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full py-10 2xl:pr-20  ">
            <div className="w-1/6">
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg leading-[60px] font-semibold">
                2023 ---{" "}
              </p>
            </div>
            <div className="w-5/6">
              <h5 className="font-semibold lg:text-[20px] md:text-xl text-lg">
                Determination
              </h5>
              <p className="Codec-Pro lg:text-[20px] md:text-xl text-lg text-[#646464] mb-3">
                <br />
                Success involves determination, a clear sense of purpose, and
                overcoming challenges. I had a lot of difficulties at first.
                However, I never let them defeat me. I viewed these difficulties
                as chances to develop, advance, and improve my skills.
                Reflecting on my five years in the design sector and everything
                I've accomplished makes me proud. The difficulties I encountered
                strengthened me, and I wouldn't be where I am today without
                them. So, here's to the future and all the adventures it holds.
                I'm ready for whatever comes my way because I have the skills,
                determination, and experience to tackle anything that comes my
                way.
              </p>
              <h1 className=" my-12  2xl:text-[250px] dark:text-white z-20 lg:text-[120px] md:text-[60px] text-[30px] Vultura-stroke">
                Resources
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
