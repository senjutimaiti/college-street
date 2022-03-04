import React from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  return (
    <div>
      <Navbar />
      <div
        className=" text-center w-screen h-auto text-lg text-slate-400 mt-5 hover:cursor-pointer"
        onClick={() => {
          history.push("/");
        }}
      >
        Home / Account
      </div>
      <div className="text-center w-screen h-auto text-4xl text-black mt-6 font-bold">
        Log in
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

export default Login;
