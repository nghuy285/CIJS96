// src/context/ProductContext.js
import React, { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/xbGambitPrime.png",
      title:
        "Xbox Series X|S & PC Victrix Gambit Prime Wired Tournament Controller",
      rating: 0,
      price: 79.99,
      brand: "xbox",
      releaseDate: "2023-01-01",
    },
    {
      id: 2,
      image: "/shunei.png",
      title:
        "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: SHUN'EI",
      rating: 5,
      price: 499.99,
      brand: "ps",
      releaseDate: "2023-02-15",
    },
    {
      id: 3,
      image: "/BFG.png",
      title:
        "PlayStation 5, PlayStation 4 & PC Victrix Pro BFG Wireless Controller White",
      rating: 4.7,
      price: 179.99,
      brand: "ps",
      releaseDate: "2023-03-05",
    },
    {
      id: 4,
      image: "/rematch.png",
      title:
        "Xbox Series X|S & PC Android Dreams REMATCH GLOW Advanced Wired Controller",
      rating: 3,
      price: 37.99,
      brand: "xbox",
      releaseDate: "2023-04-10",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
