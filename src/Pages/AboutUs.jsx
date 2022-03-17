import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ban6 from "../images/ban6.jpg";
import map from "../images/map.jpg";
import "../styles/CustomStyles.css";

const AboutUs = () => {
  return (
    <>
      <div className=" bg-white pb-40">
        <Navbar />
        <div className=" relative flex flex-col justify-center items-center">
          <img src={ban6} alt={"banner"} className=" w-full h-auto" />
          <h3 className=" absolute top-1/2 z-20 text-black text-5xl font-black hover:cursor-pointer parent">About Us</h3>
        </div>
        <div className=" lg:flex justify-center items-center relative my-20">
          <div className=" z-10 w-screen h-auto lg:w-1/2 px-20 lg:-mr-32">
            <h3 className=" text-black text-4xl font-black my-10">Why should I use OH!Food?</h3>
            <p>OH!Food (Innovative Retail Concepts Private Limited) is India’s largest online food and grocery store. 
              With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. 
              Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, 
              Personal care products, Meats – we have it all.</p><br />
            <p>Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality 
              available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your 
              doorstep, anywhere in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, 
              Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, 
              Nagpur, Patna, Indore and Chandigarh Tricity You can pay online using your debit / credit card or by cash / 
              sodexo on delivery.</p><br />
            <p>We guarantee on time delivery, and the best quality!</p>
          </div>
          <div className=" w-screen h-auto lg:w-1/2 px-20">
            <img src={map} alt={"banner"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;

