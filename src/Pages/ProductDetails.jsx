import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import P3 from "../images/P3.jpg";

const ProductDetails = ({product}) => {
  return (
    <>
        <div>
            <Navbar />
            <div className=" block md:flex md:justify-center md:items-center mt-40">
                <img
                    // src={product.images}
                    src={P3}
                    alt="product"
                    className=" w-1/2 m-20"
                />
                <div>
                    <div className=" ">{product.name}</div>
                    <div>₹ {product.price}</div>
                    <div>{product.description}</div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ProductDetails;