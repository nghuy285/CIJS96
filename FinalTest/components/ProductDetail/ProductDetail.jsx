import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";
import { UserContext } from "../UserContext/UserContext";
import ProductCard from "../ProductCard/ProductCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductDetail.css";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, setProducts } = useContext(ProductContext);
  const { user, isLogin } = useContext(UserContext);
  const [randomProduct, setRandomProduct] = useState([]);
  const [userRating, setUserRating] = useState(0);

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const product = products.find((p) => p.id === parseInt(productId));

  useEffect(() => {
    let randomData = products;
    randomData.sort(() => Math.random() - 0.5);
    setRandomProduct(randomData.slice(0, 4));

    const userRatings = JSON.parse(localStorage.getItem("userRatings")) || {};
    if (userRatings[productId] && userRatings[productId][user.id]) {
      setUserRating(userRatings[productId][user.id]);
    }
  }, [products, productId, user]);

  const handleRatingSubmit = () => {
    if (!isLogin) {
      alert("You need to login to rate this product.");
      return;
    }

    if (userRating === 0) return;

    const updatedProducts = products.map((p) => {
      if (p.id === parseInt(productId)) {
        const totalRatings = (p.totalRatings || 0) + 1;
        const newRating =
          ((p.rating || 0) * (p.totalRatings || 0) + userRating) / totalRatings;
        return { ...p, rating: newRating, totalRatings };
      }
      return p;
    });

    setProducts(updatedProducts);

    const userRatings = JSON.parse(localStorage.getItem("userRatings")) || {};
    if (!userRatings[productId]) {
      userRatings[productId] = {};
    }
    userRatings[productId][user.id] = userRating;
    localStorage.setItem("userRatings", JSON.stringify(userRatings));

    alert("Thank you for rating!");
  };

  const handleAddToCart = () => {
    if (!isLogin) {
      alert("You need to login to add products to your cart.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    if (!isLogin) {
      alert("You need to login to buy products.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/checkout");
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <img src={product.image} alt={product.title} />
        <div className="infoDetail">
          <h2>{product.title}</h2>
          <p>{product.about}</p>
          <p>
            Rating:{" "}
            {product.rating ? product.rating.toFixed(1) : "No ratings yet"}
          </p>
          <p>Price: ${product.price}</p>
          <div className="btnBuy">
            <Button variant="contained" color="error" onClick={handleAddToCart}>
              Add
            </Button>
            <Button variant="contained" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      <div className="ratingDetail">
        <h1>RATING OF PRODUCTS</h1>
        <Rating
          name="user-rating"
          value={userRating}
          onChange={(event, newValue) => {
            setUserRating(newValue);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleRatingSubmit}
        >
          Submit Rating
        </Button>
      </div>

      <div className="randomProductDetail">
        <div className="listShopDetail">
          {randomProduct.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: "pointer" }}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                rating={product.rating}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
