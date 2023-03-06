import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const imgElements = document.querySelectorAll("img");
    const h4BtnElements = document.querySelectorAll(".h4Btn");
    const h4Elements = document.querySelectorAll(".h4");

    imgElements.forEach((imgElement) => {
      imgElement.style.display = "none";
    });

    function handleMouseEnter() {
      h4Elements.forEach((h4Element) => {
        const imgElement = h4Element.querySelector("img");
        if (imgElement) {
          imgElement.style.display = "block";
        }
      });
    }

    function handleMouseLeave() {
      h4Elements.forEach((h4Element) => {
        const imgElement = h4Element.querySelector("img");
        if (imgElement) {
          imgElement.style.display = "none";
        }
      });
    }

    function handleMouseMove(event) {
      h4Elements.forEach((h4Element) => {
        h4Element.style.left = event.pageX + 20 + "px";
        h4Element.style.top = event.pageY + 20 + "px";
      });
    }

    h4BtnElements.forEach((h4BtnElement) => {
      h4BtnElement.addEventListener("mouseenter", handleMouseEnter);
      h4BtnElement.addEventListener("mouseleave", handleMouseLeave);
      h4BtnElement.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      h4BtnElements.forEach((h4BtnElement) => {
        h4BtnElement.removeEventListener("mouseenter", handleMouseEnter);
        h4BtnElement.removeEventListener("mouseleave", handleMouseLeave);
        h4BtnElement.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  return (
    <>
      <div className="h4Btn">
        <div className="hand h4">
        <div class="box">
          <img className="link-img" src="/images/home/roundimg2.svg" />
          </div>
        </div>
        <div className="btn">
            
        </div>
      </div>
    
    </>
  );
}

export default Cursor;
