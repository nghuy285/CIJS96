import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login.jsx";
import Search from "../components/Search/Search.jsx";
import OrderHistory from "../components/History/Order-History.jsx";
import Register from "../components/Auth/Register.jsx";
import ShopAll from "../components/ShopAll/ShopAll.jsx";
import Checkout from "../components/Checkout/Checkout.jsx";
import ProductDetail from "../components/ProductDetail/ProductDetail.jsx";
import { ProductProvider } from "../components/ProductContext/ProductContext.jsx";
import UserProvider from "../components/UserContext/UserContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/collections">
            <Route path="all" element={<ShopAll />}></Route>
            <Route path=":brand" element={<ShopAll />}></Route>
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </ProductProvider>
);
