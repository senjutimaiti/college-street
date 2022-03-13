import React from "react";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import logo from "../images/logo.png";

const Navbar = () => {
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    document.getElementById("navbar").style.background = "#ffffff";
    document.getElementById("navbar").style.transition = "ease-in-out .5s";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}
  return (
    <div id="navbar" className="flex justify-between items-center w-screen h-24 bg-white fixed top-0 z-50">
      <Menu className=" p-6" />
      <img src={logo} alt="logo" className=" w-[80px] h-auto align-middle absolute left-1/2 ml-[-40px]" />
      <Menu2 />
    </div>
  );
};

export default Navbar;
