// import React, { useEffect } from "react";

// export default function CursorPointer() {
//   useEffect(() => {
//     const coords = { x: 0, y: 0 };
//     const circles = document.querySelectorAll(".circle");

//     const colors = [
//       "#ffffff",
//       "#ffffff",
      
//     ];

//     circles.forEach(function (circle, index) {
//       circle.x = 0;
//       circle.y = 0;
//       circle.style.backgroundColor = colors[index % colors.length];
//     });

//     function animateCircles() {
//       let x = coords.x;
//       let y = coords.y;

//       circles.forEach(function (circle, index) {
//         circle.style.left = x - 12 + "px";
//         circle.style.top = y - 12 + "px";

//         circle.style.transform = `scale(${
//           (circles.length - index) / circles.length
//         })`;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x - x) * 0.3;
//         y += (nextCircle.y - y) * 0.3;
//       });

//       requestAnimationFrame(animateCircles);
//     }

//     function handleMouseMove(e) {
//       coords.x = e.clientX;
//       coords.y = e.clientY;
//     }

//     animateCircles();

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div>
//       {[...Array(20)].map((_, index) => (
//         <div key={index} className="circle"></div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useRef } from 'react';

export default function CursorPointer() {
  const coords = { x: 0, y: 0 };
  const colors = [
    "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff",
    // "#ffffff"
  ];

  const circlesRef = useRef([]);

  useEffect(() => {
    circlesRef.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
  }, [colors]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
      
      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.scale = (circlesRef.current.length - index) / circlesRef.current.length;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.7;
        y += (nextCircle.y - y) * 0.7;
      });
     
      requestAnimationFrame(animateCircles);
    }
    animateCircles();
  }, []);

  const circles = [];
  for (let i = 0; i < 5; i++) {
    circles.push(<div key={i} ref={el => circlesRef.current[i] = el} className="circle"></div>);
  }

  return (
    <div>
      {circles}
    </div>
  );
}
