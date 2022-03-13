import React from 'react';
import Image from "../images/C4.jpg";

const ProductLessDetails = () => {
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
    {
      id: "asdfasdf",
      name: "sohini",
      price: "INFINITY",
      images: ["", "", ""],
    },
    {
      id: "asdfasdf",
      name: "arka",
      price: "INFINITY",
      images: ["", "", ""],
    },
  ];
  return (
    <>
      <div className=" flex justify-center items-center m-20">
        <h3 className=" text-5xl">Products</h3>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 self-center items-center">
        {products.map((product, i) => {
          return (
            <div className="w-32 ">
              <div>{product.name}</div>
              <div>{product.price}</div>
              <img src={Image} alt="product" />
            </div>
          );
        })}
      </div>
    </>
  )
}

export default ProductLessDetails;

