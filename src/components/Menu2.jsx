import { FaSearch, FaUserAlt, FaOpencart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import React, { useState } from "react";

const Menu2 = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className=" w-1/6 flex justify-center items-center mr-10">
        <div>
          <FaSearch title="Search" onClick={handleClick} className=" w-5 h-auto hover:text-zinc-400 m-5 hover:cursor-pointer" />
        </div>
        <div>
          <FaUserAlt title="User"
            className=" w-5 h-auto hover:text-zinc-400 m-5 hover:cursor-pointer"
            onClick={() => {
              history.push("/Login");
            }}
          />
        </div>
        <div>
          <FaOpencart onClick = {() => { history.push("/Cart")}} title="Cart" className=" w-5 h-auto hover:text-zinc-400 m-5 hover:cursor-pointer" />
        </div>
      </div>
      <div className={(showSearch ? "flex" : "hidden") + " bg-black/70 w-full h-full fixed justify-center items-center top-0"}>
            <div className=" z-20 w-[800px] h-[200px] bg-white relative text-center p-5 rounded">

                <div onClick={handleClick} className=" absolute top-0 right-3 rotate-45 cursor-pointer text-black text-5xl">+</div>

                <form action="" className=' flex justify-center items-center' onSubmit={searchSubmitHandler}>
                    <Input type="text" placeholder="Search a Product" onChange={(e) => setKeyword(e.target.value)}/>
                    <Button text = "SEARCH" 
                    className="  hover:border-2 hover:border-black h-12 w-[100px] mt-4 border-2 p-3 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "/>
                </form>

            </div>
        </div> 
    </>
  );
};
export default Menu2;
