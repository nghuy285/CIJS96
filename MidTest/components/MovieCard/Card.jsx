import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="movieCard" onClick={props.onClick}>
      <div className="image-container">
        <img src={props.image} alt={props.movieName} className="card-image" />
        <div className="gradient-overlay">
          <div className="episode-overlay">
            <p className="episode-text">Episode {props.episode}</p>
          </div>
        </div>
      </div>
      <p className="movie-name">{props.movieName}</p>
    </div>
  );
};

export default Card;
