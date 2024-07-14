import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../ProductContext/ProductContext";
import "./Search.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Search = () => {
  const { products } = useContext(ProductContext);
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  useEffect(() => {
    if (query) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [query, products]);

  return (
    <div className="search-results">
      <Navbar></Navbar>

      <div className="Center">
        <h1>Search Results for "{query}"</h1>
        <h2>Showing {searchResults.length} results</h2>
        <div className="products">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleProductClick(product.id)}
              >
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                />
              </div>
            ))
          ) : (
            <p>
              No results found for {query}. Check the spelling or use a
              different word or phrase.
            </p>
          )}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Search;
