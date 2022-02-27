import { FaSearch, FaUserAlt, FaOpencart } from "react-icons/fa";
const Menu2 = () => {
  return (
    <div className=" w-1/6 flex justify-around items-center">
      <div>
        <FaSearch className=" w-5 h-auto hover:text-blue-500" />
      </div>
      <div>
        <FaUserAlt className=" w-5 h-auto hover:text-blue-500" />
      </div>
      <div>
        <FaOpencart className=" w-5 h-auto hover:text-blue-500" />
      </div>
    </div>
  );
};
export default Menu2;
