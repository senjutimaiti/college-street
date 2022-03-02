import { FaSearch, FaUserAlt, FaOpencart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const Menu2 = () => {
  const history = useHistory();
  return (
    <div className=" w-1/6 flex justify-around items-center">
      <div>
        <FaSearch className=" w-5 h-auto hover:text-blue-500" />
      </div>
      <div>
        <FaUserAlt
          className=" w-5 h-auto hover:text-blue-500"
          onClick={() => {
            history.push("/Login");
          }}
        />
      </div>
      <div>
        <FaOpencart className=" w-5 h-auto hover:text-blue-500" />
      </div>
    </div>
  );
};
export default Menu2;
