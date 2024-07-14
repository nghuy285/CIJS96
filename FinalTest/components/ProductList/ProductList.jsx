import React, { useEffect } from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductList = ({ filteredProducts }) => {
  const [sortOption, setSortOption] = useState("featured");
  const [sortedProducts, setSortedProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let sorted = [...filteredProducts];

    if (sortOption === "price") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "featured") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setSortedProducts(sorted);
  }, [filteredProducts, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="product-list">
      <div className="textProduct">
        <div className="product-count">
          Showing {sortedProducts.length} products
        </div>
        <div className="sort-by">
          <span>Sort By </span>
          <select className="SortBy" onChange={handleSortChange}>
            <option value="featured">Featured</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      <div className="products">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
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
  );
};

export default ProductList;
