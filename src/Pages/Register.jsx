import React from 'react'
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar />
      <div
        className=" text-center w-screen h-auto text-lg text-slate-400 mt-5 hover:cursor-pointer font-light"
        onClick={() => {
          history.push("/");
        }}
      >
        Home / Create an Account
      </div>
      <div className="text-center w-screen h-auto text-5xl text-black mt-6 font-bold mb-12">
        Register
      </div>
      <div className=" flex flex-col h-auto w-screen justify-center items-center">
        <Input type="text" label="First Name" placeholder="First Name" />
        <Input type="text" label="Last Name" placeholder="Last Name" />
        <Input type="text" label="Email" placeholder="Email" />
        <Input type="password" label="Password" placeholder="Password" />
        <p className="text-md text-left text-slate-400 mb-3 md:w-[500px] w-[300px] font-light">Your personal data will
         be used to support your experience throughout this website, to manage access to your account, 
         and for other purposes described in our
        <b 
        onClick={() => {
          history.push("/PrivacyPolicy");
        }}
        target="_blank" className="text-black hover:cursor-pointer"> privacy policy</b></p>
        <Button text = "REGISTER" className="  hover:border-2 hover:border-black h-16 md:w-[500px] w-[300px] mt-2 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "/>
        <div className=" flex h-auto w-screen justify-center items-center mb-5">
          <hr className=" md:w-[215px] w-[115px] border-5 bg-slate-300 border-slate-300 mr-6" ></hr>
          <p className="text-xl text-left">or</p>
          <hr className=" md:w-[215px] w-[115px] border-5 bg-slate-300 border-slate-300 ml-6" ></hr>
        </div>
        <Button text = "LOG IN" 
        onClick={() => {
          history.push("/Login");
        }}
        className="  border-2 border-slate-200 h-16 md:w-[500px] w-[300px] mt-2 mb-5 font-bold text-md text-black  hover:bg-black hover:text-white hover:border-black transition-all duration-700 "/>
      </div>
    </div>
  )
}

export default Register