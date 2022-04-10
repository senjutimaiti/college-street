import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { logout } from "../actions/userAction";

const Profile = ({ history }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
            <div className=" mt-40">
                <h1>My Profile</h1>
                <h3 onClick={() => { history.push("/me/update")}} className=" cursor-pointer">Edit Profile</h3>
            </div>
            <div>
                <div>
                    <h4>Full Name</h4>
                    <p>{user.name}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{user.email}</p>
                </div>
                <div>
                    <h4>Joined On</h4>
                    <p>{String(user.createdAt).substr(0, 10)}</p>
                </div>
                <div>
                    <h3 onClick={() => { history.push("/orders")}} className=" cursor-pointer">My Orders</h3>
                    <h3 onClick={() => { history.push("/password/update")}} className=" cursor-pointer">Change Password</h3>
                </div>
                <Button text = "LOG OUT" className="  hover:border-2 hover:border-black h-16 md:w-[500px] w-[300px] mt-2 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "
                onClick={logoutUser}
                />
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Profile;