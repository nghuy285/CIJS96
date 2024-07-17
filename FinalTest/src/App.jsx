import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Show from "../components/Showcase/Show";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import TabNavigation from "../components/TabNavigation/TabNavigation";
import Collection from "../components/Collection/Collection";
import Footer from "../components/Footer/Footer";
import { ProductContext } from "../components/ProductContext/ProductContext";
import { Carousel } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  const { products } = useContext(ProductContext);
  const [activeTab, setActiveTab] = useState("New");
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  useEffect(() => {
    const filteredProducts = products;
    if (activeTab === "New") {
      filteredProducts.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    } else if (activeTab === "Leaderboard") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (activeTab === "Pro Performance") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else {
    }
    setFilteredProducts(filteredProducts.slice(0, 4));
  }, [activeTab]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <div className="show1">
        <Show></Show>
      </div>

      <TabNavigation setActiveTab={setActiveTab} />
      <div className="product-listApp">
        {filteredProducts.map((product, index) => (
          <div
            onClick={() => handleProductClick(product.id)}
            style={{ cursor: "pointer" }}
          >
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              rating={product.rating}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <div className="collection">
        <Collection></Collection>
      </div>
      <h1 className="gradientText">MATCH YOUR SETUP</h1>
      <Carousel autoplay style={{ marginBottom: "20px" }}>
        <div>
          <img
            src="/Carousel1.webp"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "15px",
              position: "relative",
              left: "10%",
            }}
            alt=""
          />
        </div>
        <div>
          <img
            src="/Carousel2.webp"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "15px",
              position: "relative",
              left: "10%",
            }}
            alt=""
          />
        </div>
        <div>
          <img
            src="/Carousel3.webp"
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "15px",
              position: "relative",
              left: "10%",
            }}
            alt=""
          />
        </div>
      </Carousel>
      <Footer></Footer>
    </>
  );
}

export default App;
