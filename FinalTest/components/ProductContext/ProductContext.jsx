import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
      {
        id: 1,
        image: "/xbGambitPrime.png",
        title:
          "Xbox Series X|S & PC Victrix Gambit Prime Wired Tournament Controller",
        rating: 0,
        price: 79.99,
        brand: "xbox",
        releaseDate: "2023-01-01",
        color: ["black"],
        connectionType: ["wireless", "wired"],
        productLine: "low",
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
        connectionType: ["wired"],
        productLine: "high",
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
        connectionType: ["wireless"],
        productLine: "medium",
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
        productLine: "low",
      },
      {
        id: 5,
        image: "/kyo.png",
        title:
          "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: KYO",
        rating: 4,
        price: 499.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        productLine: "high",
      },
      {
        id: 6,
        image: "/terry.png",
        title:
          "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: TERRY",
        rating: 4,
        price: 499.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        productLine: "high",
      },
      {
        id: 7,
        image: "/irori.png",
        title:
          "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: IRORI",
        rating: 4,
        price: 499.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        productLine: "high",
      },
      {
        id: 8,
        image: "/travelCasePlus.png",
        title: "Nintendo Switch Grand Prix Peach Travel Case Plus GLOW",
        rating: 4,
        price: 19.99,
        brand: "nintendo",
        releaseDate: "2023-04-10",
        productLine: "low",
      },
      {
        id: 9,
        image: "/rematchGlow.png",
        title:
          "Nintendo Switch Grand Prix Peach REMATCH GLOW Wireless Controller",
        rating: 4,
        price: 44.99,
        brand: "nintendo",
        releaseDate: "2023-04-10",
        productLine: "low",
      },
      {
        id: 10,
        image: "/midnightMask.png",
        title:
          "PS5, PS4 & PC Victrix Pro BFG Wireless Controller Midnight Mask ",
        rating: 4,
        price: 169.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        productLine: "medium",
      },
      {
        id: 11,
        image: "/monkeyBomb.png",
        title:
          "Xbox Series X|S & PC Monkey Bomb REMATCH GLOW Advanced Wired Controller",
        rating: 4,
        price: 32.99,
        brand: "xbox",
        releaseDate: "2023-04-10",
        productLine: "low",
      },
      {
        id: 12,
        image: "/cloverPatch.png",
        title:
          "Nintendo Switch Pikmin Clover Patch REALMz™ Wireless Controller",
        rating: 4,
        price: 59.99,
        brand: "nintendo",
        releaseDate: "2023-04-10",
        productLine: "low",
      },
    ]);
  }, []);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
