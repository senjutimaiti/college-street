import React from "react";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import ProductLessDetails from "../components/ProductLessDetails";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <Categories />
      <ProductLessDetails />
    </>
  );
};

export default Home;
