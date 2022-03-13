import React from "react";
import C1 from "../images/C1.jpg";
import C2 from "../images/C2.jpg";
import C3 from "../images/C3.jpg";
import C4 from "../images/C4.jpg";
import "../styles/CustomStyles.css";

const Categories = () => {
  const categories = [
    {
      id: "asdfasdf",
      category: "Vegetables",
      price: "INFINITY",
      images: C1,
    },
    {
      id: "asdfasdf",
      category: "Fruits",
      price: "INFINITY",
      images: C2,
    },
    {
      id: "asdfasdf",
      category: "Dairy Products",
      price: "INFINITY",
      images: C3,
    },
    {
      id: "asdfasdf",
      category: "Meat",
      price: "INFINITY",
      images: C4,
    },
  ];
  return (
    <>
      <div className=" flex justify-center items-center m-20">
        <h3 className=" text-5xl">Categories</h3>
      </div>
      <div className=" grid grid-cols-2 gap-x-3 gap-y-2 justify-items-center m-10 md:flex md:justify-center md:items-center ">
        {categories.map((product, i) => {
          return (
            <div className=" m-4 relative drop-shadow-xl">
              <div className=" z-20 absolute top-5 left-2 text-xl lg:text-xl hover-underline-animation hover:cursor-pointer">
                {product.category}
              </div>
              <img
                src={product.images}
                alt="category"
                className=" w-full md:w-[400px] h-auto hover:cursor-pointer parent"
              />
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Categories;
