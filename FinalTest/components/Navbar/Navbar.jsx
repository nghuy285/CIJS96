import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import xbox from "./asset/xbox.svg";
import nitendo from "./asset/nitendo.svg";
import ps from "./asset/ps.svg";
import pc from "./asset/window.svg";
import search from "./asset/glass.svg";
import cart from "./asset/cart.svg";
import pdpLogo from "./asset/PDP.png";
import user from "./asset/user.svg";
import "./navbar.css";
import SearchBar from "../Search/SearchBar/SearchBar";

const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const navigate = useNavigate();

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchTerm.trim()) {
  //     navigate(`/search?query=${searchTerm}`);
  //   }
  // };
  return (
    <>
      <div className="containNav">
        <div className="logoPDP">
          <Link to="/">
            {" "}
            <img src={pdpLogo} />
          </Link>
        </div>

        <div className="midNav">
          {" "}
          <Link className="link" to="/collections/all">
            <p>SHOP ALL</p>
          </Link>
          <Link className="link" to="/collections/xbox">
            <div className="xbox">
              <img src={xbox}></img>
              <p>Xbox</p>
            </div>
          </Link>
          <Link className="link" to="/collections/nintendo">
            {" "}
            <div className="nitendo">
              <img src={nitendo}></img>
              <p>Nitendo Switch</p>
            </div>
          </Link>
          <Link className="link" to="/collections/ps">
            <div className="playStation">
              <img src={ps}></img>
              <p>PlayStation</p>
            </div>
          </Link>
          <Link className="link">
            {" "}
            <div className="pc">
              <img src={pc}></img>
              <p>PC</p>
            </div>
          </Link>
        </div>

        <div className="rightNav">
          <Link to="/login">
            <img src={user} style={{ width: "1.8rem" }}></img>
          </Link>

          {/* <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <img src={search} alt="Search" style={{ width: "1.8rem" }} />
            </button>
          </form> */}
          <SearchBar></SearchBar>
          <Link>
            <img src={cart} style={{ width: "1.8rem" }}></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
