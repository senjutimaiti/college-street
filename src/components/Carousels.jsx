import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import ban1 from "../images/ban1.jpg";
const Carousels = () => {
  return (
    <div>
      <Carousel showThumbs={false} showArrows={true} width="100%">
        <div>
          <img src={ban1} />
          <p>Legend 1</p>
        </div>
        <div>
          <img src={ban1} />
          <p>Legend 2</p>
        </div>
        <div>
          <img src={ban1} />
          <p>Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
