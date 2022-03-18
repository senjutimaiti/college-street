import React from "react";
import P1 from "../images/P1.jpg";
import P2 from "../images/P2.jpg";
import P3 from "../images/P3.jpg";
import P4 from "../images/P4.jpg";
import P5 from "../images/P5.jpg";
import P6 from "../images/P6.jpg";
import P7 from "../images/P7.jpg";
import P8 from "../images/P8.jpg";
import "../styles/CustomStyles.css";
import Button from "../components/Button";

const ProductLessDetails = () => {
  const products = [
    {
      id: "asdfasdf",
      name: "Apples",
      price: "Rs 70",
      images: P1,
    },
    {
      id: "asdfasdf",
      name: "Onions",
      price: "Rs 35",
      images: P2,
    },
    {
      id: "asdfasdf",
      name: "Oranges",
      price: "Rs 35",
      images: P3,
    },
    {
      id: "asdfasdf",
      name: "Cheese",
      price: "Rs 120",
      images: P4,
    },
    {
      id: "asdfasdf",
      name: "Broccoli",
      price: "Rs 200",
      images: P5,
    },
    {
      id: "asdfasdf",
      name: "Eggs",
      price: "Rs 8",
      images: P6,
    },
    {
      id: "asdfasdf",
      name: "Fish",
      price: "Rs 300",
      images: P7,
    },
    {
      id: "asdfasdf",
      name: "Chicken",
      price: "Rs 200",
      images: P8,
    },
  ];
  return (
    <>
      <div className=" flex justify-center items-center m-20">
        <h3 className=" text-5xl">Products</h3>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-2 justify-items-center ml-5 mr-5">
        {products.map((product, i) => {
          return (
            <div className=" m-4 relative drop-shadow-xl">
              <div className=" z-20 absolute top-10 left-3 text-md lg:text-xl hover-underline-animation hover:cursor-pointer">
                {product.name}
              </div>
              <div className=" z-20 absolute top-10 right-3 text-md lg:text-base">
                {product.price}
              </div>
              <img
                src={product.images}
                alt="product"
                className=" w-full md:w-[400px] h-auto hover:cursor-pointer parent"
              />
              <div className=" flex justify-center items-center left-1/2 -ml-[100px] z-50 absolute bottom-0">
                <Button text = "ADD TO CART" className=" hover:border-2 hover:border-black h-10 w-[200px] mt-2 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "/> 
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductLessDetails;
