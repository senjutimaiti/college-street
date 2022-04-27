import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../constants/orderConstants";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProcessOrder = () => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);
  const { id } = useParams();
  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(id, myForm));
  };

  const dispatch = useDispatch();
  const history = useHistory()

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, error, id, isUpdated, updateError]);

  return (
    <>
      <div className=" bg-white pb-20">
            <Navbar />
            <div className=" w-full grid grid-cols-[1fr_5fr]">
                <Sidebar />
                <div className=" w-full box-border flex flex-col border-l-2 border-slate-300 py-12 mt-20">
                {loading ? (
                    <Loader />
                ) : (
                    <div
                    className="confirmOrderPage"
                    style={{
                        display: order.orderStatus === "Delivered" ? "block" : "grid",
                    }}
                    >
                    <div>
                        <div className="confirmshippingArea">
                        <div>Shipping Info</div>
                        <div className="orderDetailsContainerBox">
                            <div>
                            <p>Name:</p>
                            <span>{order.user && order.user.name}</span>
                            </div>
                            <div>
                            <p>Phone:</p>
                            <span>
                                {order.shippingInfo && order.shippingInfo.phoneNo}
                            </span>
                            </div>
                            <div>
                            <p>Address:</p>
                            <span>
                                {order.shippingInfo &&
                                `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                            </span>
                            </div>
                        </div>

                        <div>Payment</div>
                        <div className="orderDetailsContainerBox">
                            <div>
                            <p
                                className={
                                order.paymentInfo &&
                                order.paymentInfo.status === "succeeded"
                                    ? "greenColor"
                                    : "redColor"
                                }
                            >
                                {order.paymentInfo &&
                                order.paymentInfo.status === "succeeded"
                                ? "PAID"
                                : "NOT PAID"}
                            </p>
                            </div>

                            <div>
                            <p>Amount:</p>
                            <span>{order.totalPrice && order.totalPrice}</span>
                            </div>
                        </div>

                        <div>Order Status</div>
                        <div className="orderDetailsContainerBox">
                            <div>
                            <p
                                className={
                                order.orderStatus && order.orderStatus === "Delivered"
                                    ? "greenColor"
                                    : "redColor"
                                }
                            >
                                {order.orderStatus && order.orderStatus}
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="confirmCartItems">
                        <div>Your Cart Items:</div>
                        <div className="confirmCartItemsContainer">
                            {order.orderItems &&
                            order.orderItems.map((item) => (
                                <div key={item.product}>
                                <img src={item.image} alt="Product" />
                                <div onClick={() => {history.push(`/product/${item.product}`)}}>
                                    {item.name}
                                </div>{" "}
                                <span>
                                    {item.quantity} X ₹{item.price} ={" "}
                                    <b>₹{item.price * item.quantity}</b>
                                </span>
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    {/*  */}
                    <div
                        style={{
                        display: order.orderStatus === "Delivered" ? "none" : "block",
                        }}
                    >
                        <form
                        className="updateOrderForm"
                        onSubmit={updateOrderSubmitHandler}
                        >
                        <h1>Process Order</h1>

                        <div>
                            <AccountTreeIcon />
                            <select onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Choose Category</option>
                            {order.orderStatus === "Processing" && (
                                <option value="Shipped">Shipped</option>
                            )}

                            {order.orderStatus === "Shipped" && (
                                <option value="Delivered">Delivered</option>
                            )}
                            </select>
                        </div>

                        <Button
                            id="createProductBtn"
                            type="submit"
                            disabled={
                            loading ? true : false || status === "" ? true : false
                            }
                        >
                            Process
                        </Button>
                        </form>
                    </div>
                    </div>
                )}
            </div>    
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProcessOrder;