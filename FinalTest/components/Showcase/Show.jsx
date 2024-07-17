import React from "react";
import item1 from "./asset/item1.png";
import item2 from "./asset/item2.png";
import item3 from "./asset/item3.png";
import item4 from "./asset/item4.png";
import { Link } from "react-router-dom";
import "./show.css";
const Show = () => {
  return (
    <div className="grid-container">
      <div className="item1">
        <h1>READY FOR PRIME TIME</h1>
        <p>
          Upgrade to victory with the new Victrix Gambit Prime Wired Tournament
          Controller.
        </p>
        <Link className="btnShop" id="btnShop1" to="/collections/all">
          Shop Now
        </Link>
        <img src={item1}></img>
      </div>
      <div className="item2">
        <h1>IT'S SHOWTIME</h1>
        <p>Steal the spotlight with new Princess Peach accessories</p>
        <img src={item2}></img>
        <Link className="btnShop" id="btnShop2" to="product/9">
          Shop Now
        </Link>
      </div>
      <div className="item3">
        <h1>BUILT FOR GAMING</h1>
        <p>The Victrix Pro BFG is available now on Xbox & PC</p>
        <img src={item3}></img>
        <Link className="btnShop" id="btnShop3" to="/collections/all">
          Shop Now
        </Link>
      </div>
      <div className="item4">
        <h1>BE THE KING OF FIGHTERS</h1>
        <p>Limited Edition Pro FS Arcade Fight Sticks available now</p>
        <img src={item4}></img>
        <Link className="btnShop" id="btnShop4" to="product/2">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Show;
