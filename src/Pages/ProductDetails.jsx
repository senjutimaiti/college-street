import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import P3 from "../images/P3.jpg";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Button";

const ProductDetails = () => {
    const options = {
        edit: false,
        color: "gray",
        activeColor: "#ffd700",
        value: 2.5,
        isHalf: true,
      };

  return (
    <>
        <div className=" bg-white">
            <Navbar />
            <div className=" block md:flex md:justify-center md:items-center mt-20">
                <img
                    src={P3}
                    alt="product"
                    className=" w-full md:w-1/2 p-20"
                />
                <div className=" p-20">
                    <h3 className=" text-4xl font-extrabold">Oranges</h3>
                    <h2>₹ 1234</h2>
                    <div>
                        <ReactStars {...options} />
                    </div>
                    <p className=" my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Possimus maxime, nisi officiis voluptatum sint sit qui optio rem quidem 
                        repellendus provident atque eveniet fuga ipsa? Voluptatum deleniti quasi eaque quia.
                    </p>
                    <Button
                        text="ADD TO CART"
                        className=" border-2 rounded-lg border-black w-full p-2 font-bold text-md text-black bg-white hover:bg-black hover:text-white  transition-all duration-700 "
                    />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ProductDetails;