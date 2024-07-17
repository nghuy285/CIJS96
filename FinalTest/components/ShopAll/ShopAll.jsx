import React, { useState, useEffect, useContext } from "react";
import infoBackground1 from "./assets/Shop_All.webp";
import infoBackground2 from "./assets/xbox_hero.png";
import infoBackground3 from "./assets/Switch_hero.jpg";
import infoBackground4 from "./assets/PS_hero.png";
import "./ShopAll.css";
import Navbar from "../Navbar/Navbar";
import ProductList from "../ProductList/ProductList";
import FilterBar from "../FilterBar/FilterBar";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";

const ShopAll = () => {
  const { brand } = useParams();
  const { products } = useContext(ProductContext);

  const infoBackground = {
    all: infoBackground1,
    xbox: infoBackground2,
    nintendo: infoBackground3,
    ps: infoBackground4,
  };

  const infoText = {
    all: [
      "SHOP ALL PDP",
      "Unique. Colorful. Innovative. Shop our controllers, headsets, & chargers designed for your gaming console.",
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
  const navigate = useNavigate();
  const [shop, setShop] = useState("all");
  const [backgroundShop, setBackgroundShop] = useState(infoBackground.all);
  const [infoTextShop, setInfoTextShop] = useState(infoText.all);
  const [randomProduct, setRandomProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    connectionType: [],
    color: [],
    productLine: [],
  });
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
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
    let randomData = products;
    randomData.sort(() => Math.random() - 0.5);
    setRandomProduct(randomData.slice(0, 4));
  }, [brand, products]);

  useEffect(() => {
    let filtered =
      shop === "all"
        ? products
        : products.filter((product) => product.brand === shop);

    if (filters.connectionType.length > 0) {
      filtered = filtered.filter((product) =>
        filters.connectionType.some(
          (type) =>
            Array.isArray(product.connectionType) &&
            product.connectionType.includes(type)
        )
      );
    }

    if (filters.color.length > 0) {
      filtered = filtered.filter((product) =>
        filters.color.some(
          (color) =>
            Array.isArray(product.color) && product.color.includes(color)
        )
      );
    }

    if (filters.productLine.length > 0) {
      filtered = filtered.filter((product) =>
        filters.productLine.includes(product.productLine)
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products, shop]);

  return (
    <>
      <Navbar />
      <div className="infoShop">
        <div className="textShopAll">
          <h1>{infoTextShop[0]}</h1>
          <p>{infoTextShop[1]}</p>
        </div>
        <img src={backgroundShop} alt="" />
      </div>
      <div className="listProduct">
        <FilterBar filters={filters} setFilters={setFilters} />
        <ProductList shop={shop} filteredProducts={filteredProducts} />
      </div>
      <div className="randomProduct">
        <h2 style={{ position: "relative", left: "40%", fontSize: "30px" }}>
          MAYBE YOU LIKE
        </h2>
        <div className="products-listShopAll">
          {randomProduct.map((product, index) => (
            <div
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: "pointer" }}
            >
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                rating={product.rating}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="EndShopAll">
        <Footer />
      </div>
    </>
  );
};

export default ShopAll;
