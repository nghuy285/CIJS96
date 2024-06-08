import React, { useState } from "react";
import "./modal.css";

const Modal = (props) => {
  const [updatedPokemon, setUpdatedPokemon] = useState({
    id: props.id,
    name: props.name,
    types: props.type,
    image: props.img,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPokemon((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    props.onSave(updatedPokemon);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>
          &times;
        </span>
        <div className="contain">
          <img src={props.img} alt={updatedPokemon.name} />
          <span>
            <p>ID:</p>
            <input type="text" name="id" value={updatedPokemon.id} />
          </span>
          <br />
          <span>
            <p>Tên Pokemon:</p>
            <input
              type="text"
              name="name"
              value={updatedPokemon.name}
              onChange={handleInputChange}
            />
          </span>

          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
