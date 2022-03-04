import React from "react";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

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
      <div className=" flex flex-col h-auto w-screen justify-center items-center">
        <Input type="text" label="Email" placeholder="Email" />
        <Input type="password" label="Password" placeholder="Password" />
        <p onClick={() => {
          history.push("/ResetPassword");
        }}
        className="text-xl fontOswald text-left ">Forgot your password?</p>
        <Button text = "LOG IN" className="  hover:border-2 hover:border-black h-16 w-[500px] mt-2 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "/>
        <div className=" flex h-auto w-screen justify-center items-center mb-5">
          <hr className=" w-[215px] border-5 bg-slate-400 border-slate-400 mr-6" ></hr>
          <p className="text-xl fontOswald text-left">or</p>
          <hr className=" w-[215px] border-5 bg-slate-400 border-slate-400 ml-6" ></hr>
        </div>
        <Button text = "CREATE AN ACCOUNT" 
        onClick={() => {
          history.push("/Register");
        }}
        className="  border-2 border-slate-400 h-16 w-[500px] mt-2 mb-5 font-bold text-md text-black  hover:bg-black hover:text-white hover:border-black transition-all duration-700 "/>
      </div>
    </div>
  );
};

export default Login;
