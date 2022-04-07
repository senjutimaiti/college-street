import React from "react";
import Button from "../components/Button";
import ReactStars from "react-rating-stars-component";
import P3 from "../images/P3.jpg";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {

  const history = useHistory();
  const options = {
    edit: false,
    color: "gray",
    activeColor: "#ffd700",
    value: product.rating,
    isHalf: true,
  };

  return (
    <div onClick = {() => { history.push(`/product/${product._id}`)}}>
      <div className=" flex flex-col justify-center items-center 4 relative w-full h-auto my-4 px-4">
        <img
          src={P3}
          //src={product.images}
          alt="product"
          className=" w-full md:w-[400px] top-0 h-auto hover:cursor-pointer rounded-lg"
        />
        <div className=" text-xl lg:text-2xl mt-2">{product.name}</div>
        <div>₹ {product.price}</div>
        <div>
          <ReactStars {...options} />
        </div>
        <Button
          text="ADD TO CART"
          className=" border-2 rounded-lg border-black w-full p-2 font-bold text-md text-black bg-white hover:bg-black hover:text-white  transition-all duration-700 "
        />
      </div>
    </div>
  );
};

export default ProductCard;
