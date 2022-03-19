import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import P1 from "../images/P1.jpg";
import P2 from "../images/P2.jpg";
import P3 from "../images/P3.jpg";
import Button from "../components/Button";
import "../styles/CustomStyles.css";

const Cart = () => {
  const history = useHistory();
  const products = [
    {
      id: "asdfasdf",
      name: "Apples",
      price: 70,
      images: P1,
    },
    {
      id: "asdfasdf",
      name: "Onions",
      price: 35,
      images: P2,
    },
    {
      id: "asdfasdf",
      name: "Oranges",
      price: 35,
      images: P3,
    },
  ];

  const [productQuantity, setProductQuantity] = useState([]);

  useEffect(() => {
    //api call

    const newProductQuantity = [];
    for (const _ of products) {
      newProductQuantity.push(0);
    }

    setProductQuantity(newProductQuantity);
  }, []);

  return (
    <>
      <div className=" bg-white pb-20">
        <Navbar />
        <div className=" text-center w-screen h-auto text-lg text-black mt-28 hover:cursor-pointer font-light">
          <span
            onClick={() => {
              history.push("/");
            }}
          >
            Home /
          </span>
          <span
            onClick={() => {
              history.push("/Cart");
            }}
          >
            {" "}
            Cart
          </span>
        </div>
        <div className="text-center w-screen h-auto text-5xl text-black mt-6 font-bold mb-12">
          Cart
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-2 justify-items-center ml-5 mr-5">
          {products.map((product, i) => {
            return (
              <div className=" m-4 relative p-4">
                <div className=" z-20 absolute top-20 left-3 text-md lg:text-xl hover-underline-animation hover:cursor-pointer">
                  {product.name}
                  <br />
                  {product.price}
                </div>
                <img
                  src={product.images}
                  alt="product"
                  className=" w-full md:w-[400px] h-auto hover:cursor-pointer"
                />
                <input
                  type="number"
                  name="Quantity"
                  placeholder="Quantity"
                  className="w-full border-2 border-slate-400 h-10 pl-3"
                  value={productQuantity[i]}
                  onChange={(e) => {
                    if (e.target.value < 0) return;

                    const newProductQuantity = productQuantity.map(
                      (quantity, j) => {
                        if (i === j) {
                          return e.target.value;
                        } else return quantity;
                      }
                    );

                    setProductQuantity(newProductQuantity);
                  }}
                />
                <div className=" flex justify-center items-center">
                  <Button
                    text="REMOVE"
                    className=" hover:border-2 hover:border-black h-10 w-[200px] mt-2 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" overflow-x-scroll">
          <div
            style={{
              width: "5000px",
              height: "100px",
              backgroundColor: "black",
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
