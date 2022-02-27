import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Menu = ({ className }) => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav(!showNav);
  };
  const history = useHistory();
  return (
    <div className={className}>
      <div onClick={handleClick} className=" xl:hidden  fixed">
        <GiHamburgerMenu className=" h-6 w-auto m-10 fixed top-3" />
      </div>
      <div
        onClick={handleClick}
        className={
          (showNav ? "-left-full" : "left-0") +
          " top-5 fixed h-auto w-96  bg-slate-200 transition-all duration-750 ease-in xl:hidden z-10"
        }
      >
        <div className="flex flex-col m-10 text-xl ">
          <div
            className=" p-4 hover:text-blue-300 transition-all duration-750 ease-in"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </div>
          <div
            className=" p-4 hover:text-blue-300 transition-all duration-750 ease-in"
            onClick={() => {
              history.push("/Shop");
            }}
          >
            Shop
          </div>
          <div
            className=" p-4 hover:text-blue-300 transition-all duration-750 ease-in"
            onClick={() => {
              history.push("/AboutUs");
            }}
          >
            About Us
          </div>
          <div
            className=" p-4 hover:text-blue-300 transition-all duration-750 ease-in"
            onClick={() => {
              history.push("/ContactUs");
            }}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className=" hidden h-16  justify-around items-center xl:flex text-lg ">
        <div
          className=" p-6 hover:text-blue-300 transition-all duration-750 ease-in"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </div>
        <div
          className=" p-6 hover:text-blue-300 transition-all duration-750 ease-in"
          onClick={() => {
            history.push("/Shop");
          }}
        >
          Shop
        </div>
        <div
          className=" p-6 hover:text-blue-300 transition-all duration-750 ease-in"
          onClick={() => {
            history.push("/AboutUs");
          }}
        >
          About Us
        </div>
        <div
          className=" p-6 hover:text-blue-300 transition-all duration-750 ease-in"
          onClick={() => {
            history.push("/ContactUs");
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Menu;
