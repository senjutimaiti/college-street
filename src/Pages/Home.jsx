import React from "react";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import ProductLessDetails from "../components/ProductLessDetails";
import Categories from "../components/Categories";
import ban4 from "../images/ban4.jpg";
import ban5 from "../images/ban5.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <Categories />
      <ProductLessDetails />
      <div className=" block md:flex justify-center items-center w-screen h-auto mt-20 relative">
        <img src={ban4} alt={"banner"} className=" w-screen md:w-1/2 " />
        <img src={ban5} alt={"banner"} className=" w-screen md:w-1/2" />
      </div>
    </>
  );
};

export default Home;
