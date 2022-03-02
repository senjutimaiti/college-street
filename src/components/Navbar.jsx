import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-screen h-24 bg-slate-300">
      <Menu className=" p-6" />
      <img src={logo} alt="logo" className=" w-12 h-auto" />
      <Menu2 />
    </div>
  );
};

export default Navbar;
