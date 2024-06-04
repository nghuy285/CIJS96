import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState(0);
  const colorChange = () => {
    switch (color) {
      case "red":
        setColor("yellow");
        break;
      case "yellow":
        setColor("green");
        break;
      case "green":
        setColor("red");
        break;
      default:
        setColor("red");
    }
  };
  return (
    <>
      <div className="contain">
        <div className={color === "red" ? "red" : "off"}></div>
        <div className={color === "yellow" ? "yellow" : "off"}></div>
        <div className={color === "green" ? "green" : "off"}></div>
      </div>
      <button className="changeColor" onClick={colorChange}>
        Chuyển
      </button>
    </>
  );
}

export default App;
