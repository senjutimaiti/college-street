import React from "react";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import ProductLessDetails from "../components/ProductLessDetails";
import Footer from "../components/Footer";
import HomeBanners from "../components/HomeBanners";

const Home = () => {

  return (
    <>
      <Navbar />
      <div className=" bg-white ">
        <Carousels />
        <ProductLessDetails />
        <HomeBanners />
      </div>
      <Footer />
    </>
  );
};

export default Home;
