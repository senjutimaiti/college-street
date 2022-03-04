import React from "react";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-screen h-24 bg-white shadow-md sticky z-50">
      <Menu className=" p-6" />
      <img src={logo} alt="logo" className=" w-[80px] h-auto align-middle absolute left-1/2 ml-[-40px]" />
      <Menu2 />
    </div>
  );
};

export default Navbar;
