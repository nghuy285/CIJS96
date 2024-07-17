import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import xbox from "./asset/xbox.svg";
import nitendo from "./asset/nitendo.svg";
import ps from "./asset/ps.svg";
import pc from "./asset/window.svg";
import search from "./asset/glass.svg";
import cart from "./asset/cart.svg";
import pdpLogo from "./asset/PDP.png";
import userIcon from "./asset/user.svg";
import "./navbar.css";
import SearchBar from "../Search/SearchBar/SearchBar";
import { UserContext } from "../UserContext/UserContext";
import { Button } from "@mui/material";

const Navbar = () => {
  const { isLogin, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (isLogin) {
      navigate("/order-history");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="containNav">
        <div className="logoPDP">
          <Link to="/">
            <img src={pdpLogo} alt="PDP Logo" />
          </Link>
        </div>

        <div className="midNav">
          <Link className="link" to="/collections/all">
            <p>SHOP ALL</p>
          </Link>
          <Link className="link" to="/collections/xbox">
            <div className="xbox">
              <img src={xbox} alt="Xbox" />
              <p>Xbox</p>
            </div>
          </Link>
          <Link className="link" to="/collections/nintendo">
            <div className="nitendo">
              <img src={nitendo} alt="Nintendo" />
              <p>Nitendo Switch</p>
            </div>
          </Link>
          <Link className="link" to="/collections/ps">
            <div className="playStation">
              <img src={ps} alt="PlayStation" />
              <p>PlayStation</p>
            </div>
          </Link>
        </div>

        <div className="rightNav">
          <img
            src={userIcon}
            style={{
              width: "1.8rem",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            alt="User"
            onClick={handleUserClick}
          />
          {isLogin && (
            <Button
              onClick={logoutUser}
              style={{ marginBottom: "1rem", color: "black" }}
            >
              Log Out
            </Button>
          )}
          <SearchBar />
          <Link to="/checkout">
            <img src={cart} style={{ width: "1.8rem" }} alt="Cart" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
