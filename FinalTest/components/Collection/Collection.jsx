import React from "react";
import "./Collection.css";
import background from "./asset/background.webp";
import logo from "./asset/sonicRGB.png";
import product from "/realmz.png";
const Collection = () => {
  return (
    <>
      <div className="collection">
        <img src={background} className="background"></img>
        <div className="collectionCard">
          <img src={logo}></img>
          <img src={product} id="product"></img>
          <p>Explore the REALMz of these uniquely collectible controllers</p>
        </div>
      </div>
    </>
  );
};

export default Collection;
