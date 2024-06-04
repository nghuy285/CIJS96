import React from "react";
import "./card.css";

const PokemonCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.img} alt="" />
      <p className="pokemon_id">{props.id}</p>
      <p className="pokemon_name">{props.name}</p>
      <div className="class">
        {props.type.map((type, index) => (
          <span key={index} className={type}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
