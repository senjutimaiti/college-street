import React from "react";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Pay from "../images/Pay.jpg";

const Footer = () => {
  return (
    <div className="w-screen h-32 mt-10 flex justify-around items-center  ">
      <div className=" flex justify-center items-center">
        <AiFillTwitterCircle className=" text-2xl ml-3 hover:text-blue-600" />
        <AiFillInstagram className=" text-2xl ml-3 hover:text-blue-600" />
        <AiFillFacebook className=" text-2xl ml-3 hover:text-blue-600" />
      </div>
      <div className=" font-light tracking-wider">
        2020 <span className=" font-bold">Oh!Food</span> all rights reserved.
      </div>
      <div>
        <img src={Pay} alt={"Cards"} className=" h-14" />
      </div>
    </div>
  );
};

export default Footer;
