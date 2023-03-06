import React, { useRef } from "react";

const ThreeDCarousal = () => {
  const boxesRef = useRef(null);
  function shiftLeft() {
    const boxes = boxesRef.current.children;
    const tmpNode = boxes[0];
    if (boxes.length > 5) {
      tmpNode.classList.add("box--hide");
      boxes[5].classList.remove("box--hide");
      boxes[4].classList.remove("box-insert-from-right");
      boxes[1].classList.add("decrease-1");
      boxes[2].classList.add("decrease");
      boxes[3].classList.add("increase");
      boxes[4].classList.add("increase-1");
      boxes[5].classList.add("box-insert-from-right");
    }
    // boxes[1].classList.add("box-move-out-from-left");
    boxes[0].remove();
    boxesRef.current.appendChild(tmpNode);
  }

  function shiftRight() {
    const boxes = boxesRef.current.children;
    const noOfCards = boxes.length;
    if (noOfCards > 4) {
      boxes[4].classList.add("box--hide");
    }

    const tmpNode = boxes[noOfCards - 1];
    tmpNode.classList.remove("box--hide");
    boxes[noOfCards - 1].remove();
    boxesRef.current.insertBefore(tmpNode, boxesRef.current.firstChild);
  }
  return (
    <div className="container mx-auto">
      <div className="container-carousal">
        <div className="button" onClick={shiftLeft}>
          <img className='h-full' src="https://image.ibb.co/mRsEb7/left_arrow.png" alt=""></img>
        </div>
        <div className="cards-wrapper">
          <ul className="cards__container" ref={boxesRef}>
            <li className="box">
              <img className='h-full'
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).webp"
                alt="Slide"
              />
            </li>
            <li className="box">
              <img className='h-full'
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).webp"
                alt="Slide"
              />
            </li>
            <li className="box">
              <img className='h-full'
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).webp"
                alt="Slide"
              />
            </li>
            <li className="box">
              <img className='h-full'
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(48).webp"
                alt="Slide"
              />
            </li>
            <li className="box">
              <img className='h-full'
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(49).webp"
                alt="Slide"
              />
            </li>
            <li className="box box--hide">
            <img className='h-full' src="https://mdbootstrap.com/img/Photos/Slides/img%20(52).webp" alt="Slide" />
            </li>
            <li className="box box--hide">
              <img className='h-full'
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(51).webp"
                alt="Slide"
              />
            </li>
          </ul>
          <div className="card__text-content">
            <h3 className="card__title">The Famous Five</h3>
            <div className="card__summary">
              The Famous Five is a series of children's adventure novels written
              by English author Enid Blyton. The first book, Five on a Treasure
              Island, was published in 1942.
            </div>
          </div>
        </div>
        <div className="button" onClick={shiftRight}>
          <img className='h-full' src="https://image.ibb.co/dfPSw7/right_arrow.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCarousal;
