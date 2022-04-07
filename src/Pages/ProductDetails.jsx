import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import P3 from "../images/P3.jpg";
import ReactStars from "react-rating-stars-component";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
    // clearErrors,
    getProductDetails,
    // newReview,
  } from "../actions/productAction";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector(
    (state) => state.productDetails
  );

//   const { success, error: reviewError } = useSelector(
//     (state) => state.newReview
//   );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

//   const [quantity, setQuantity] = useState(1);
//   const [open, setOpen] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const increaseQuantity = () => {
//     if (product.Stock <= quantity) return;

//     const qty = quantity + 1;
//     setQuantity(qty);
//   };

//   const decreaseQuantity = () => {
//     if (1 >= quantity) return;

//     const qty = quantity - 1;
//     setQuantity(qty);
//   };

//   const addToCartHandler = () => {
//     dispatch(addItemsToCart(id, quantity));
//     alert.success("Item Added To Cart");
//   };

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
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

//     if (reviewError) {
//       alert.error(reviewError);
//       dispatch(clearErrors());
//     }

//     if (success) {
//       alert.success("Review Submitted Successfully");
//       dispatch({ type: NEW_REVIEW_RESET });
//     }
    dispatch(getProductDetails(id));
}, [dispatch, id]);

  return (
    <>
      <div className=" bg-white">
        <Navbar />
        <div className=" block md:flex md:justify-center md:items-center mt-20">
          <img src={P3} alt="product" className=" w-full md:w-1/2 p-20" />
          <div className=" p-20">
            <h3 className=" text-4xl font-extrabold">{product.name}</h3>
            <h2>₹ {product.price}</h2>
            <div>
              <ReactStars {...options} />
            </div>
            <p>
                  Status:
                  <b className={product.Stock < 1 ? " text-red-500" : " text-green-600"}>
                    {product.Stock < 1 ? " Out Of Stock" : " In Stock"}
                  </b>
                </p>
            <p className=" my-5">
              {product.description}
            </p>
            <Button
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
