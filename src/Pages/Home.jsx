import React from "react";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import ProductLessDetails from "../components/ProductLessDetails";
import Categories from "../components/Categories";

const Home = () => {
  const products = [
    {
      id: "asdfasdf",
      name: "Sayan",
      price: "INFINITY",
      images: ["", "", ""],
    },
    {
      id: "asdfasdf",
      name: "Senjuti",
      price: "INFINITY",
      images: ["", "", ""],
    },
    {
      id: "asdfasdf",
      name: "Somosree",
      price: "INFINITY",
      images: ["", "", ""],
    },
    {
      id: "asdfasdf",
      name: "Bismay",
      price: "INFINITY",
      images: ["", "", ""],
    },
  ];
  return (
    <>
      <Navbar />
      <Carousels />
      <Categories />
      {products.map((e, i) => {
        return <ProductLessDetails key={i} product={e} />;
      })}
    </>
  );
};

export default Home;
