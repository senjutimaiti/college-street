import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import P3 from "../images/P3.jpg";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
  // newReview,
} from "../actions/productAction";
import { addItemsToCart } from "../actions/cartAction";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, error } = useSelector((state) => state.productDetails);

  //   const { success, error: reviewError } = useSelector(
  //     (state) => state.newReview
  //   );

  const options = {
    size: "large",
    value: product.ratings,
    edit: false,
    precision: 0.5,
    color: "gray",
    activeColor: "#800000",
  };

  const [quantity, setQuantity] = useState(1);
  //   const [open, setOpen] = useState(false);
  //   const [rating, setRating] = useState(0);
  //   const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (product.stock >= 1) {
      dispatch(addItemsToCart(id, quantity));
      alert("Item Added To Cart");
    } else {
      alert("Out of Stock");
    }
  };

  //   const submitReviewToggle = () => {
  //     open ? setOpen(false) : setOpen(true);
  //   };

  //   const reviewSubmitHandler = () => {
  //     const myForm = new FormData();

  //     myForm.set("rating", rating);
  //     myForm.set("comment", comment);
  //     myForm.set("productId", id);

  //     dispatch(newReview(myForm));

  //     setOpen(false);
  //   };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);

  return (
    <>
      <div className=" bg-white">
        <Navbar />
        <div className=" block md:flex md:justify-center md:items-center mt-20">
          <img
            src={product.images[0].url}
            alt="product"
            className=" w-full md:w-1/2 p-20"
          />
          <div className=" p-20">
            <h3 className=" text-4xl font-extrabold">{product.name}</h3>
            <h2>₹ {product.price}</h2>
            <div>
              <ReactStars
                edit={true}
                size={20}
                color="gray"
                activeColor="red"
                value={product.ratings}
              />
              {console.log(product.ratings)}
            </div>
            <div className=" flex justify-left items-center">
              <button
                onClick={decreaseQuantity}
                className=" bg-slate-400 px-3 cursor-pointer text-white transition-all duration-500 hover:bg-slate-700"
              >
                -
              </button>
              <input
                readOnly
                type="number"
                value={quantity}
                className=" p-2 text-center font-bold w-14"
              />
              <button
                onClick={increaseQuantity}
                className=" bg-slate-400 px-3 cursor-pointer text-white transition-all duration-500 hover:bg-slate-700"
              >
                +
              </button>
            </div>
            <p>
              Status:
              <b
                className={
                  product.stock < 1 ? " text-red-500" : " text-green-600"
                }
              >
                {product.stock < 1 ? " Out Of Stock" : " In Stock"}
              </b>
            </p>
            <p className=" my-5">{product.description}</p>
            <Button
              onClick={addToCartHandler}
              text="ADD TO CART"
              className=" border-2 rounded-lg border-black w-full p-2 font-bold text-md text-black bg-white hover:bg-black hover:text-white  transition-all duration-700 "
            />
          </div>
        </div>
        <div className=" text-center block w-screen border-y-[1.2px] border-slate-600 h-20 border-opacity-40 md:flex md:justify-center md:items-center">
          <div className=" mt-3 md:m-10">
            <span className=" font-bold">Brand : </span>
            <span className=" text-gray-500">Oh!Food</span>
          </div>
          <div className=" mt-3 md:m-10">
            <span className=" font-bold">Category : </span>
            <span className=" text-gray-500">{product.category}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
