import React from "react";
import { useState } from "react";
import "./TabNavigation.css";

const TabNavigation = ({ setActiveTab }) => {
  const [active, setActive] = useState("New");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActive(tabName);
  };

  return (
    <div className="tab-navigation">
      <button
        className={`tab ${active === "New" ? "active" : ""}`}
        onClick={() => handleTabClick("New")}
      >
        New
      </button>
      <button
        className={`tab ${active === "Leaderboard" ? "active" : ""}`}
        onClick={() => handleTabClick("Leaderboard")}
      >
        Leaderboard
      </button>
      <button
        className={`tab ${active === "Pro Performance" ? "active" : ""}`}
        onClick={() => handleTabClick("Pro Performance")}
      >
        Pro Performance
      </button>
    </div>
  );
};

export default TabNavigation;
