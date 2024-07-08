import React, { useState, useEffect } from "react";
import infoBackground1 from "./assets/Shop_All.webp";
import infoBackground2 from "./assets/xbox_hero.png";
import infoBackground3 from "./assets/Switch_hero.jpg";
import infoBackground4 from "./assets/PS_hero.png";
import "./ShopAll.css";
import Navbar from "../Navbar/Navbar";
import ProductList from "../ProductList/ProductList";
import FilterBar from "../FilterBar/FilterBar";
import { useParams } from "react-router-dom";

const ShopAll = () => {
  const { brand } = useParams();

  const infoBackground = {
    all: infoBackground1,
    xbox: infoBackground2,
    nintendo: infoBackground3,
    ps: infoBackground4,
  };
  const infoText = {
    all: [
      "SHOP ALL PDP",
      "Unique. Colorful. Innovative. Shop our controllers, headsets, &chargers designed for your gaming console.",
    ],
    xbox: [
      "XBOX",
      "Unique. Colorful. Innovative. Shop our controllers, headsets, & chargers designed for Xbox.",
    ],
    nintendo: [
      "NINTENDO",
      "Eye-catching. Fun. Inclusive. Shop our controllers, headsets, & accessories made for Nintendo Switch™.",
    ],
    ps: [
      "PLAYSTATION",
      "Unique. Colorful. Innovative. Shop our controllers, headsets, & chargers designed for PlayStation.",
    ],
  };
  const [shop, setShop] = useState("all");
  const [backgroundShop, setBackgroundShop] = useState(infoBackground.all);
  const [infoTextShop, setInfoTextShop] = useState(infoText.all);
  useEffect(() => {
    if (brand) {
      setShop(brand);
      setBackgroundShop(infoBackground[brand]);
      setInfoTextShop(infoText[brand]);
    } else {
      setShop("all");
      setBackgroundShop(infoBackground.all);
      setInfoTextShop(infoText.all);
    }
  }, [brand]);
  return (
    <>
      <Navbar></Navbar>
      <div className="infoShop">
        <div className="textShopAll">
          <h1>{infoTextShop[0]}</h1>
          <p>{infoTextShop[1]}</p>
        </div>
        <img src={backgroundShop} alt="" />
      </div>
      <div className="listProduct">
        <FilterBar></FilterBar>
        <ProductList shop={shop}></ProductList>
      </div>
    </>
  );
};

export default ShopAll;
