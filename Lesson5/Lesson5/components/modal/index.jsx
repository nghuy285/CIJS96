import React from "react";
import "./modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>
          &times;
        </span>
        <div className="contain">
          <img src={props.img} alt="" />
          <span>
            <p>ID:</p>
            <input type="text" value={props.id} />
          </span>

          <br></br>
          <span>
            {" "}
            <p>Tên Pokemon:</p>
            <input type="text" value={props.name} />
          </span>

          <div className="class" id="type">
            {props.type.map((type, index) => (
              <span key={index} className={type}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
