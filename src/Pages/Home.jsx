import React from "react";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import ProductLessDetails from "../components/ProductLessDetails";
import ban4 from "../images/ban4.jpg";
import ban5 from "../images/ban5.jpg";
import Footer from "../components/Footer";
import Button from "../components/Button";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-white pb-40">
        <Carousels />
        <ProductLessDetails />
        <div className=" flex flex-col justify-center items-center m-20">
          <h3 className=" text-2xl my-2">We provide fresh groceries.</h3>
          <p className=" text-lg text-slate-400 tracking-wider my-2 text-center">Looks so Good on the Outside, It'll Make You Feel Good Inside</p>
          <Button text = "SHOP NOW" className="  hover:border-2 hover:border-black h-16 w-[300px] mt-3 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "/>
        </div>
        <div className=" block md:flex justify-center items-center w-screen h-auto mt-20 relative">
          <img src={ban4} alt={"banner"} className=" w-screen md:w-1/2 " />
          <img src={ban5} alt={"banner"} className=" w-screen md:w-1/2" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
