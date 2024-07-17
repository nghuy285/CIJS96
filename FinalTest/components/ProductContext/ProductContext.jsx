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
        connectionType: ["wired"],
        productLine: "low",
        about:
          "When the speed of your input could be the difference between a win and a loss, you need the world's fastest licensed Xbox controller. Eliminate lag and maximize your speed with the Victrix Gambit Prime Wired Tournament Controller. With endless customizability, Dolby Atmos surround sound audio, and our patented Clutch Triggers™ and Dual Core™ technology, this controller was engineered to win more when it matters most.",
      },
      {
        id: 2,
        image: "/shunei.png",
        title:
          "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: SHUN'EI",
        rating: 0,
        price: 499.99,
        brand: "ps",
        releaseDate: "2023-02-15",
        connectionType: ["wired"],
        productLine: "high",
        color: ["blue"],
        about:
          "Focus on fighting your enemy, not fatigue, with the built-in comfort features of the Limited Edition The King of Fighters Victrix Pro FS Arcade Fight Stick. Land every hit, especially when it matters most, with the reliable Sanwa Denshi buttons and our patented Link 2 Joystick. Made for tournaments, the Pro FS has integrated carrying handles and cable organizers for easy transportation, and a control bar filled with the buttons you need to make quick adjustments. Simply swap out components and make mods with the quick-access back panel and clean layout. Get ready to play like a pro with the tournament-ready Victrix Pro FS Arcade Fight Stick.",
      },
      {
        id: 3,
        image: "/BFG.png",
        title:
          "PlayStation 5, PlayStation 4 & PC Victrix Pro BFG Wireless Controller White",
        rating: 0,
        price: 179.99,
        brand: "ps",
        color: ["white"],
        releaseDate: "2023-03-05",
        connectionType: ["wireless"],
        productLine: "medium",
        about:
          "Built for gaming. Built for gold. Built for greatness. No matter what the “BFG” in Pro BFG stands for, this modular controller was built to win: Win everyday matches or win esports competitions. Engineered to fit your play style and packed with tons of customizable options, the Pro BFG Wireless Controller is the new standard in PlayStation and PC gaming. ",
      },
      {
        id: 4,
        image: "/rematch.png",
        title:
          "Xbox Series X|S & PC Android Dreams REMATCH GLOW Advanced Wired Controller",
        rating: 0,
        price: 37.99,
        brand: "xbox",
        color: ["blue", "pink"],
        connectionType: ["wired"],
        releaseDate: "2023-04-10",
        productLine: "low",
        about:
          "Give your gaming a glow up with the Android Dreams REMATCH GLOW Advanced Wired Controller. Power up your play with the unique glow in the dark design, customizability through the app, and enhanced features of this officially licensed controller.",
      },
      {
        id: 5,
        image: "/kyo.png",
        title:
          "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: KYO",
        rating: 0,
        price: 499.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        color: ["yellow"],
        connectionType: ["wired"],
        productLine: "high",
        about:
          "Focus on fighting your enemy, not fatigue, with the built-in comfort features of the Limited Edition The King of Fighters Victrix Pro FS Arcade Fight Stick. Land every hit, especially when it matters most, with the reliable Sanwa Denshi buttons and our patented Link 2 Joystick. Made for tournaments, the Pro FS has integrated carrying handles and cable organizers for easy transportation, and a control bar filled with the buttons you need to make quick adjustments. Simply swap out components and make mods with the quick-access back panel and clean layout. Get ready to play like a pro with the tournament-ready Victrix Pro FS Arcade Fight Stick.",
      },
      {
        id: 6,
        image: "/terry.png",
        title:
          "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: TERRY",
        rating: 0,
        price: 499.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        productLine: "high",
        color: ["red"],
        connectionType: ["wired"],
        about:
          "Focus on fighting your enemy, not fatigue, with the built-in comfort features of the Limited Edition The King of Fighters Victrix Pro FS Arcade Fight Stick. Land every hit, especially when it matters most, with the reliable Sanwa Denshi buttons and our patented Link 2 Joystick. Made for tournaments, the Pro FS has integrated carrying handles and cable organizers for easy transportation, and a control bar filled with the buttons you need to make quick adjustments. Simply swap out components and make mods with the quick-access back panel and clean layout. Get ready to play like a pro with the tournament-ready Victrix Pro FS Arcade Fight Stick.",
      },
      {
        id: 7,
        image: "/irori.png",
        title:
          "PS5, PS4 & PC VICTRIX PRO FS ARCADE FIGHT STICK - THE KING OF FIGHTERS: IRORI",
        rating: 0,
        price: 499.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        productLine: "high",
        color: ["purple"],
        connectionType: ["wired"],
        about:
          "Focus on fighting your enemy, not fatigue, with the built-in comfort features of the Limited Edition The King of Fighters Victrix Pro FS Arcade Fight Stick. Land every hit, especially when it matters most, with the reliable Sanwa Denshi buttons and our patented Link 2 Joystick. Made for tournaments, the Pro FS has integrated carrying handles and cable organizers for easy transportation, and a control bar filled with the buttons you need to make quick adjustments. Simply swap out components and make mods with the quick-access back panel and clean layout. Get ready to play like a pro with the tournament-ready Victrix Pro FS Arcade Fight Stick.",
      },
      {
        id: 8,
        image: "/travelCasePlus.png",
        title: "Nintendo Switch Grand Prix Peach Travel Case Plus GLOW",
        rating: 0,
        price: 19.99,
        brand: "nintendo",
        releaseDate: "2023-04-10",
        color: ["black", "pink"],
        productLine: "low",
        about:
          "Pack, protect, and power your play with the Grand Prix Peach Travel Case Plus GLOW. This sturdy carrying case for the Nintendo Switch™, Nintendo Switch™ Lite, or Nintendo Switch™ - OLED Model features a unique, glow in the dark design so you can glow on-the-go.",
      },
      {
        id: 9,
        image: "/rematchGlow.png",
        title:
          "Nintendo Switch Grand Prix Peach REMATCH GLOW Wireless Controller",
        rating: 0,
        price: 44.99,
        brand: "nintendo",
        color: ["black", "pink"],
        releaseDate: "2023-04-10",
        productLine: "low",
        connectionType: ["wired", "Wireless"],
        about:
          "Power up your play with the 40-hour rechargeable battery and unique, glow in the dark design of the REMATCH GLOW Wireless Controller for Nintendo Switch™.",
      },
      {
        id: 10,
        image: "/midnightMask.png",
        title:
          "PS5, PS4 & PC Victrix Pro BFG Wireless Controller Midnight Mask ",
        rating: 0,
        price: 169.99,
        brand: "ps",
        releaseDate: "2023-04-10",
        productLine: "medium",
        color: ["blue"],
        connectionType: ["wired", "wireless"],
        about:
          "**The Gift With Purchase In-Game Charm promotion has ended Performance without Compromise. Advanced, professional controller for PS5™, PS4™, and PC with seamless wireless or wired connectivity, long-lasting battery life and a full arsenal of customizable options. Check out the new Victrix Control Hub App update for the Pro BFG! Ultimate Customization: Program back buttons, re-map face buttons, adjust trigger dead zones, and more! Calibration: Recalibrate analog sticks regularly to maintain precision, remedy stick drift, and adjust dead zones. Diagnostics: Ensure your Pro BFG is running in optimal condition by testing each module, buttons, sticks, and triggers. Premium Audio: Select between 3 EQ presets, adjust volume output, and mic monitoring levels for complete immersion. Firmware Update: Periodic firmware updates bring improvements including extended battery life, improved wireless connectivity, and other competitive enhancements.",
      },
      {
        id: 11,
        image: "/monkeyBomb.png",
        title:
          "Xbox Series X|S & PC Monkey Bomb REMATCH GLOW Advanced Wired Controller",
        rating: 0,
        price: 32.99,
        color: ["black"],
        brand: "xbox",
        releaseDate: "2023-04-10",
        connectionType: ["wired"],
        productLine: "low",
        about:
          "Ready for a rematch? Take your enemies down again and again with the enhanced features and customizability of the Monkey Bomb REMATCH Advanced Wired Controller, officially licensed by Xbox.",
      },
      {
        id: 12,
        image: "/cloverPatch.png",
        title:
          "Nintendo Switch Pikmin Clover Patch REALMz™ Wireless Controller",
        rating: 0,
        price: 59.99,
        brand: "nintendo",
        color: ["green"],
        releaseDate: "2023-04-10",
        connectionType: ["wired", "wireless"],
        productLine: "low",
        about:
          "Hold the game realms in the palms of your hands with the Pikmin Clover Patch REALMz™ Wireless Controller. Featuring a collectible figurine, multi-layered design, and a built-in rechargeable battery, this officially licensed controller is in a world of its own.",
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
