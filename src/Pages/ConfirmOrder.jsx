import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import P3 from "../images/P3.jpg";
import Button from "../components/Button";

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const history = useHistory();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <>
      <div className=" bg-white pb-40">
        <Navbar />
        <CheckoutSteps activeStep={1} className=" mt-40" />
        <div className>
          <div>
            <div className="">
              <div className="text-center w-screen h-auto text-5xl text-black mt-6 font-bold mb-12">
                Shipping Info
              </div>
              <div className=" m-10">
                <div className=" flex flex-col h-auto  justify-center items-center text-xl ">
                  <p className=" flex h-auto justify-center items-center mb-2  ">
                    Name: <span className="text-slate-500">{user.name}</span>
                  </p>
                  <p className=" flex h-auto justify-center items-center mb-2">
                    Phone:{" "}
                    <span className="text-slate-500">
                      {shippingInfo.phoneNo}
                    </span>
                  </p>
                  <p className=" flex h-auto justify-center items-center mb-2 ">
                    Address:
                    <span className="text-slate-500">{address}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <p className="flex h-auto justify-center items-center mb-2 underline  text-2xl underline-offset-1">
                Your Cart Items:
              </p>
              <div className="confirmCartItemsContainer">
                {cartItems &&
                  cartItems.map((item) => (
                    <div
                      key={item.product}
                      className="flex justify-around items-center my-3 border-b-[0.5px] border-slate-500 pb-2"
                    >
                      <img className="h-auto w-28" src={P3} alt="Product" />
                      {/* <img src={item.image} alt="Product" /> */}
                      <div
                        onClick={() => {
                          history.push(`/product/${item.product}`);
                        }}
                      >
                        {item.name}
                      </div>
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div>
            <div className="h-auto flex flex-col justify-center items-center">
              <div className="flex h-auto justify-center items-center mb-5 underline  text-2xl underline-offset-1 mt-10">
                Order Summmary
              </div>
              <div>
                <div className="text-xl">
                  <p className=" flex h-auto justify-center items-center mb-2 ">
                    Subtotal:
                    <span className="text-slate-500">₹{subtotal}</span>
                  </p>

                  <p className=" flex h-auto justify-center items-center mb-2 ">
                    Shipping Charges:
                    <span className="text-slate-500">₹{shippingCharges}</span>
                  </p>

                  <p className=" flex h-auto justify-center items-center mb-2 ">
                    GST:
                    <span className="text-slate-500">₹{tax}</span>
                  </p>
                </div>
              </div>

              <div className=" text-xl">
                <p className=" flex h-auto justify-center items-center mb-2 ">
                  <b>Total:</b>

                  <span className="text-slate-500">₹{totalPrice}</span>
                </p>
              </div>

              <Button
                text="PROCCED TO PAY"
                onClick={proceedToPayment}
                className=" border-2 rounded-lg border-black p-2 font-bold text-md text-black bg-white hover:bg-black hover:text-white transition-all duration-700 "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmOrder;
