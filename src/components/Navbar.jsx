import React from "react";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-screen h-24 bg-slate-300">
      <Menu className=" p-6" />
      <img src={logo} alt="logo" className=" w-20 h-auto align-middle" />
      <Menu2 />
    </div>
  );
};

export default Navbar;
