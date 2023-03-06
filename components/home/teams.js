import React from "react";

export default function Teams() {
  const cards = [
    {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },  {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },  
      {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },  {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },  {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },  {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },  {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },  {
        img: "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp",
        name: "Shoaib Akmal",
        status: "Co-founder & CEO",
      },
  ];
  return (
    <section className="lg:py-20 ">
      <div className="container mx-auto">
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1">
          {cards.map((cards, key) => {
            return (
              <>
                <div className="relative overflow-hidden bg-no-repeat group rounded-xl bg-cover w-full">
                  <img
                    src={cards.img}
                    className="w-full 2xl:h-[350px] md:h-[300px] h-[200px]"
                    alt="Louvre"
                  />
                  <div
                    className="absolute flex items-center  justify-center text-center text-white  right-0 bottom-0 left-0 w-full h-20 overflow-hidden opacity-70  bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 group-hover:max-h-0"
                    style={{ transition: "all 5s ease 5s" }}
                  >
                    <div>
                      <h4>{cards.name}</h4>
                      <a>{cards.status}</a>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center text-center text-white top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
                    <div>
                      <h4>Shoaib Akmal </h4>
                      <a>Co-founder & CEO</a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
