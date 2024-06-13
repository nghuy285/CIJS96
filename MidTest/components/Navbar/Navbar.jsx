import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        {" "}
        <h1>Anonime</h1>
        <div className="menu">
          <p>Home</p>
          <p>List anime</p>
        </div>
        <input placeholder="Search anime or movie"></input>
      </div>
    </>
  );
};

export default Navbar;
