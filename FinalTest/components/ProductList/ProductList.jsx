import React, { useEffect } from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useState } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
function ProductList(props) {
  const { products } = useContext(ProductContext);
  const [sortOption, setSortOption] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered =
      props.shop === "all"
        ? [...products]
        : products.filter((product) => product.brand === props.shop);

    if (sortOption === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "featured") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  }, [products, props.shop, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div className="product-list">
      <div className="textProduct">
        <div className="product-count">
          Showing {filteredProducts.length} products
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
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
