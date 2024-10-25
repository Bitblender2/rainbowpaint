import Btn from "./Btn";
import React, { useState, useEffect } from "react";
import Banner2 from "../assets/RP_Web_Banner-2.png";
import Banner3 from "../assets/RP_Web_Banner-3.png";
import Banner4 from "../assets/RP_Web_Banner-4.png";
import Banner5 from "../assets/RP_Web_Banner-5.png";
import Banner6 from "../assets/RP_Web_Banner-7.png";
import "./Landing.css";

function Landing() {
  const images = [Banner2, Banner3, Banner4, Banner5, Banner6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="Home"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="heading">
        <h1 className="text-[4rem] text-white text-center">
          BEAUTIFYING MALAWI SINCE 1990
        </h1>
        <Btn btn="Read Our Story" Classname="btn" />
      </div>
    </div>
  );
}

export default Landing;
