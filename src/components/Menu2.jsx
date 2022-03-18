import { FaSearch, FaUserAlt, FaOpencart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const Menu2 = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className=" w-1/6 flex justify-center items-center mr-10">
        <div>
          <FaSearch title="Search" onClick={handleClick} className=" w-5 h-auto hover:text-zinc-400 m-5" />
        </div>
        <div>
          <FaUserAlt title="User"
            className=" w-5 h-auto hover:text-zinc-400 m-5"
            onClick={() => {
              history.push("/Login");
            }}
          />
        </div>
        <div>
          <FaOpencart title="Cart" className=" w-5 h-auto hover:text-zinc-400 m-5" />
        </div>
      </div>
      <div className={(showSearch ? "flex" : "hidden") + " bg-black/70 w-full h-full fixed justify-center items-center top-0"}>
            <div className=" z-20 w-[800px] h-[200px] bg-white relative text-center p-5 rounded">

                <div onClick={handleClick} className=" absolute top-0 right-3 rotate-45 cursor-pointer text-black text-5xl">+</div>

                <form action="" className=' flex justify-center items-center'>
                    <Input type="text" placeholder="Start Typing" />
                    <Button text = "SEARCH" 
                    onClick={() => {
                      history.push("/Search");
                    }}
                    className="  hover:border-2 hover:border-black h-12 w-[100px] mt-4 border-2 p-3 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "/>
                </form>

            </div>
        </div> 
    </>
  );
};
export default Menu2;
