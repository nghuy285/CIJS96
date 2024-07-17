import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./OrderHistory.css";

const OrderHistory = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const transactions =
        JSON.parse(localStorage.getItem("transactions")) || {};
      setOrders(transactions[user.username] || []);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="order-history-container">
          <h2>Please log in to view your order history.</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="order-history-container">
        <h2>Your Order History</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="order-list">
            {orders.map((order, index) => (
              <div key={index} className="order-item">
                <img src={order.image} alt={order.title} />
                <div>
                  <h3>{order.title}</h3>
                  <p>Price: ${order.price}</p>
                  <p>Quantity: {order.quantity}</p>
                  <p>Date: {new Date(order.date).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrderHistory;
