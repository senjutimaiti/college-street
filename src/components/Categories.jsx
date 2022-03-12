import React from "react";
import C1 from "../images/C1.jpg";
import C2 from "../images/C2.jpg";
import C3 from "../images/C3.jpg";
import C4 from "../images/C4.jpg";
import "../styles/CustomisedStyles.css";

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
    <div className="block md:flex justify-center items-center ">
      {categories.map((product, i) => {
        return (
          <div className="w-full m-6 relative">
            <div className=" absolute top-5 text-2xl underline underline-offset-8 hover:cursor-pointer">
              {product.category}
            </div>
            <img
              src={product.images}
              alt="my image"
              className=" hover:cursor-pointer "
            />
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Categories;
