import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ban1 from "../images/ban1.jpg";
const Carousels = () => {
  return (
    <div>
      <Carousel showThumbs={false} showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div style={{ height: "500px"}}>
          <img src={ban1} alt="img"/>
        </div>
        <div style={{ height: "500px"}}>
          <img src={ban1} alt="img"/>
        </div>
        <div style={{ height: "500px"}}>
          <img src={ban1} alt="img"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
