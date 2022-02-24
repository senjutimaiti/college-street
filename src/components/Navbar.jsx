import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className=" flex justify-between items-center">
        <div className=" ">
          <ul >
            <li className=" inline-block">
              <Link to="/">Home</Link>
            </li>
            <li className=" inline-block">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className=" inline-block">
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li className=" inline-block">
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>oH!Food</div>
        <div>
          <ul className=" inline-block">
            <li className=" inline-block">
              <Link to="/">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
            <li className=" inline-block">
              <Link to="/">
                <i class="fa-solid fa-user"></i>
              </Link>
            </li>
            <li className=" inline-block">
              <Link to="/">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
