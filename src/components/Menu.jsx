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
        <GiHamburgerMenu className=" h-11 w-auto m-10 fixed top-6" />
      </div>
      <div
        onClick={handleClick}
        className={
          (showNav ? "-left-full" : "left-0") +
          " top-10 fixed h-auto w-96  bg-slate-200 transition-all duration-750 ease-in xl:hidden"
        }
      >
        <div className="flex flex-col m-5 text-3xl">
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
      <div className=" hidden h-32  justify-around items-center xl:flex text-4xl ">
        <div
          className=" p-10 hover:text-blue-300 transition-all duration-750 ease-in"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </div>
        <div
          className=" p-10 hover:text-blue-300 transition-all duration-750 ease-in"
          onClick={() => {
            history.push("/Shop");
          }}
        >
          Shop
        </div>
        <div
          className=" p-10 hover:text-blue-300 transition-all duration-750 ease-in"
          onClick={() => {
            history.push("/AboutUs");
          }}
        >
          About Us
        </div>
        <div
          className=" p-10 hover:text-blue-300 transition-all duration-750 ease-in"
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
