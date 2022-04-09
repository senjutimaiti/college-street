import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../actions/productAction";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../styles/CustomStyles.css";
import Slider from "@material-ui/core/Slider";
import Typography from '@mui/material/Typography';

const Products = () => {
    
    const categories = [
        "Fruits",
        "Vegetables",
        "Dairy Products",
        "Meat",
      ];

  const dispatch = useDispatch();
  let { keyword } = useParams();
//   const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  //let count = filteredProductsCount;

  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings]);

  return (
    <>
      <div className=" bg-white pb-96">
        <Navbar />
        <h2 className=" flex justify-center items-center text-5xl text-black font-black mt-32 mb-10">Shop</h2>
        <div className=" flex justify-center items-center">
          <div className=" w-1/4">

            <div className="filterBox">
              <Typography>Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />

              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <fieldset>
                <Typography component="legend">Ratings Above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                />
              </fieldset>
            </div>
          </div>
          <div className=" w-3/4">
            <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2 justify-items-center mx-5">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                  ))}
            </div>      

            {resultPerPage < productsCount && (
              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                  />
              </div>
          )}
          </div>      
        </div> 
      </div>
      <Footer />
    </>
  )
}

export default Products;