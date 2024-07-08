import React from "react";
import { Link } from "react-router-dom";
import xbox from "./asset/xbox.svg";
import nitendo from "./asset/nitendo.svg";
import ps from "./asset/ps.svg";
import pc from "./asset/window.svg";
import search from "./asset/glass.svg";
import cart from "./asset/cart.svg";
import pdpLogo from "./asset/PDP.png";
import user from "./asset/user.svg";
import "./navbar.css";

const Navbar = () => {
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

          <Link>
            <img src={search} style={{ width: "1.8rem" }}></img>
          </Link>

          <Link>
            <img src={cart} style={{ width: "1.8rem" }}></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
