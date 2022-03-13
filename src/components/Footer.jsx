import React from "react";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Pay from "../images/Pay.jpg";

const Footer = () => {
  return (
    <div className=" flex flex-col  w-screen h-32 mt-10 md:flex-row justify-around items-center sticky bottom-0 -z-20">
      <div className=" flex justify-center items-center">
        <AiFillTwitterCircle className=" text-2xl ml-3 hover:text-blue-600" />
        <AiFillInstagram className=" text-2xl ml-3 hover:text-blue-600" />
        <AiFillFacebook className=" text-2xl ml-3 hover:text-blue-600" />
      </div>
      <div className="font-light tracking-wider mt-4">
        2020 <span className=" font-bold">Oh!Food</span> all rights reserved.
      </div>
      <div>
        <img src={Pay} alt={"Cards"} className=" h-14" />
      </div>
    </div>
  );
};

export default Footer;
