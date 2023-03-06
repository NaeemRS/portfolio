import React from "react";

export default function Card() {
  return (
    <>
      <div className="gallery">
        <img className="gallery-img" src="/images/home/hover-image1.png" />
      </div>
      <div id="gallery">
        <div>
          <span class="title">Grayscale</span>
          <img
            src="/images/home/Rectangle.jpg"
            class="grayscale"
          />
        </div>
      </div>
    </>
  );
}
