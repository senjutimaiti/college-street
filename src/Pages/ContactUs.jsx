import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ban7 from "../images/ban7.jpg";
import Button from '../components/Button';
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const ContactUs = () => {
  return (
    <>
      <div className=" bg-white pb-20">
        <Navbar />
        <div className=" block md:flex items-top">
          <div className="block w-full md:w-2/3">
            <img src={ban7} alt={"banner"} className=" w-full h-auto top-0" />
            <form action="" className=" m-20 flex flex-col justify-center items-center">
              <div>
                <label htmlFor="Name" className="text-xl text-left ">
                Your Name
                </label><br />
                <input type="text" className=" border-2 border-slate-200 h-12 w-[300px] lg:w-[500px] pl-3 mt-2 mb-5 "/>
              </div>
              <div>
                <label htmlFor="Email" className="text-xl text-left ">
                Your Email
                </label><br />
                <input type="text" className=" border-2 border-slate-200 h-12 w-[300px] lg:w-[500px] pl-3 mt-2 mb-5 " />
              </div>
              <div>
                <label htmlFor="Message" className="text-xl text-left ">
                Your Message
                </label><br />
                <textarea className=" border-2 border-slate-200 h-[300px] w-[300px] lg:w-[500px] pl-3 mt-2 mb-5 " />
              </div>
              <div>
              <Button text = "SEND" className="  hover:border-2 hover:border-black h-16 lg:w-[500px] w-[300px] mt-2 mb-5 font-bold text-md hover:text-black hover:bg-white bg-black text-white  transition-all duration-700 "/>
              </div>
            </form>
          </div>
          <div className=" px-20 mt-40">
            <h3 className=" text-5xl mt-5 text-black font-black mb-20">Contact</h3>
            <p className=" text-xl text-black font-bold my-5">Address</p>
            <p className=" text-xl text-black font-light mb-10">16 Boulevard Saint-Germain<br />
                75005 Paris,<br />
                France</p>
                <p className=" text-xl text-black font-bold my-5">Email</p>
            <p className=" text-xl text-black font-light mb-10">info@ohfood.come</p>
            <p className=" text-xl text-black font-bold my-5">Telephone</p>
            <p className=" text-xl text-black font-light mb-10">+33 (0) 31-305-210<br />
                mo – fri: 09:00 – 17:00</p>
            <div className=" flex justify-start items-center">
              <AiFillTwitterCircle className=" text-4xl mx-3 hover:text-zinc-400 hover:cursor-pointer" />
              <AiFillInstagram className=" text-4xl mx-3 hover:text-zinc-400 hover:cursor-pointer" />
              <AiFillFacebook className=" text-4xl mx-3 hover:text-zinc-400 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs;