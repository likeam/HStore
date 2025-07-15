import React from "react";
import { Link, useParams } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import {
  useDeliverOrderMutation,
  useGetMyOrdersQuery,
} from "../../redux/api/orderApiSlice";
import { useSelector } from "react-redux";
import Messsage from "../../components/Message";

const Order = () => {
  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetMyOrdersQuery(orderId);

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div>
        <div className="md:w-1/3">
          <div className="mt-5 border-gray-300 pb-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Shipping</h2>
            <p className="mb-4 mt-4">
              <strong className="text-pink-500">Order:</strong> {order._id}
            </p>

            <p className="mb-4">
              <strong className="text-pink-500">Name:</strong>{" "}
              {order.user.username}
            </p>

            <p className="mb-4">
              <strong className="text-pink-500">Email:</strong>{" "}
              {order.user.email}
            </p>

            <p className="mb-4">
              <strong className="text-pink-500">Address:</strong>{" "}
              {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
              {order.shippingAddress.cell}, {order.shippingAddress.country}
            </p>

            <p className="mb-4">
              <strong className="text-pink-500">Method:</strong>{" "}
              {order.paymentMethod}
            </p>

            {/* {order.isPaid ? (
            <Messsage variant="success">Paid on {order.paidAt}</Messsage>
          ) : (
            <Messsage variant="danger">Not paid</Messsage>
          )} */}
          </div>

          <h2 className="text-xl font-bold mb-2 mt-[3rem]">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>Rs {order.itemsPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Rs {order.shippingPrice}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span>Rs {order.totalPrice}</span>
          </div>

          {/* {!order.isPaid && (
          <div>
            {loadingPay && <Loader />}{" "}
            {isPending ? (
              <Loader />
            ) : ( */}
          <div>
            <div>
              <GooglePayButton
              // createOrder={createOrder}
              // onApprove={onApprove}
              // onError={onError}
              ></GooglePayButton>
            </div>
          </div>
          {/* )} */}
        </div>
        {/* )} */}

        <div>
          <button
            type="button"
            className="bg-pink-500 text-white w-full py-2"
            onClick={deliverHandler}
          >
            Mark As Delivered
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
