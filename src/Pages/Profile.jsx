import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userAction";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  function logoutUser() {
    dispatch(logout());
    alert("Logout Successfully");
  }

  return (
    <>
      <div className=" bg-white pb-10">
        <Navbar />
        <div className=" mt-32 flex flex-col justify-center items-center h-auto w-full">
          <h1 className=" text-xl  tracking-wider mb-6 font-medium border-b-[0.4px] w-3/4 text-center">
            My Profile
          </h1>
          <h3
            onClick={() => {
              history.push("/me/update");
            }}
            className=" cursor-pointer text-lg mb-3 text-gray-600"
          >
            Edit Profile
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center h-auto w-full">
          <div>
            <p className=" text-gray-600 text-lg mb-3">
              <span className=" tracking-wider font-semibold text-black">
                Full Name :
              </span>
              {user.name}
            </p>
          </div>
          <div>
            <p className=" text-gray-600 text-lg mb-3">
              <span className=" tracking-wider font-semibold text-black">
                Email :
              </span>{" "}
              {user.email}
            </p>
          </div>
          <div>
            <p className=" text-gray-600 text-lg mb-3">
              <span className=" tracking-wider font-semibold text-black">
                Joined On :
              </span>{" "}
              {String(user.createdAt).substr(0, 10)}
            </p>
          </div>
          <h3
            onClick={() => {
              history.push("/orders");
            }}
            className=" cursor-pointer text-gray-600 text-lg mb-3"
          >
            My Orders
          </h3>
          {user.role === "admin" && (
            <h3
            onClick={() => {
              history.push("/admin/dashboard");
            }}
            className=" cursor-pointer text-gray-600 text-lg mb-3"
          >
            Dashboard
          </h3>
          )}
          <h3
            onClick={() => {
              history.push("/password/update");
            }}
            className=" cursor-pointer text-gray-600 text-lg mb-3"
          >
            Change Password
          </h3>

          <Button
            text="LOG OUT"
            className="  hover:border-2 hover:border-black h-16 md:w-[500px] w-[300px] mt-2 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "
            onClick={logoutUser}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
