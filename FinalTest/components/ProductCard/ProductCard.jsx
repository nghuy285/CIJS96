import React from "react";
import "./ProductCard.css";

function ProductCard({ image, title, rating, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
              ★
            </span>
          ))}
          <span className="rating">{rating.toFixed(1)}</span>
        </div>
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
