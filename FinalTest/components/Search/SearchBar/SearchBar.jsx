import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "/glass.svg";
import "./SearchBar.css";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="inputSearch"
      />
      <button type="submit" className="buttonSearch">
        <img src={search} alt="Search" style={{ width: "1.8rem" }} />
      </button>
    </form>
  );
};

export default SearchBar;
