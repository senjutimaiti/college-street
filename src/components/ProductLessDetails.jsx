import React from "react";
import Image from "../images/ban1.jpg";

export default function ProductLessDetails({ product }) {
  return (
    <div className=" w-32">
      <div className="w-full ">
        <div>{product.name}</div>
        <div>{product.price}</div>
        <img src={Image} alt="my iamge" />
      </div>
    </div>
  );
}
