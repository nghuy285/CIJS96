import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Checkout.css";
import Button from "@mui/material/Button";
import { Card, Form, Input, message } from "antd";

const Checkout = () => {
  const { user, isLogin } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, []);

  const handleCheckout = (values) => {
    if (!isLogin) {
      alert("You need to login to complete the purchase.");
      return;
    }

    const transactions = JSON.parse(localStorage.getItem("transactions")) || {};
    if (!transactions[user.username]) {
      transactions[user.username] = [];
    }

    const orderItems = cart.map((item) => ({
      ...item,
      date: new Date().toISOString(),
    }));

    transactions[user.username] = [
      ...transactions[user.username],
      ...orderItems,
    ];

    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.removeItem("cart");
    setCart([]);
    setTotal(0);
    message.success("Purchase successful!");
    navigate("/");
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    const totalPrice = updatedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h2>Checkout</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout-summary">
              <h3>Total: ${total.toFixed(2)}</h3>
              <Card className="checkout-form" title="Enter Payment Details">
                <Form onFinish={handleCheckout}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item
                    name="address"
                    rules={[
                      { required: true, message: "Please input your address!" },
                    ]}
                  >
                    <Input placeholder="Address" />
                  </Form.Item>
                  <Form.Item
                    name="cardNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your card number!",
                      },
                    ]}
                  >
                    <Input placeholder="Card Number" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Confirm Purchase
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
