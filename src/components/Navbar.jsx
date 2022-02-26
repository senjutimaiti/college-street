import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setShowNav(!showNav);
  };

  return (
    <nav className="md:flex lg:flex justify-around items-center bg-white sticky top-0 z-20">
      <div className=" flex justify-between items-center">
        <div className=" ">
          <div onClick={handleClick} className=" md:visible lg:hidden">
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <ul
            className={
              (showNav ? "left-0" : "-left-full") +
              " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-left"
            }
          >
            <li className=" text-lg font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-500"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className=" text-lg font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-500"
                }
                to={"/Shop"}
              >
                Shop
              </NavLink>
            </li>
            <li className=" text-lg font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-500"
                }
                to={"/AboutUs"}
              >
                About Us
              </NavLink>
            </li>
            <li className=" text-lg font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-500"
                }
                to={"/ContactUs"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img className="" src="/" alt="logo" />
          </Link>
        </div>
        <div>
          <ul className=" flex justify-between items-center">
            <li className=" ">
              <Link to="/">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
            <li className=" ">
              <Link to="/">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
            <li className=" ">
              <Link to="/">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
