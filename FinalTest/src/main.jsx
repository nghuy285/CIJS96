import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login.jsx";
import Register from "../components/Auth/Register.jsx";
import ShopAll from "../components/ShopAll/ShopAll.jsx";
import { ProductProvider } from "../components/ProductContext/ProductContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/collections">
          <Route path="all" element={<ShopAll />}></Route>
          <Route path=":brand" element={<ShopAll />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ProductProvider>
);
