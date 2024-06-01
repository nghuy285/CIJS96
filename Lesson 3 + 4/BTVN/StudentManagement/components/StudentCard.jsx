import React from "react";
import "./index.css";

const StudentCard = (props) => {
  const handleClick = () => {
    alert(props.id + "  " + props.name + "  " + props.total);
  };
  return (
    <tr onClick={handleClick}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.total}</td>
    </tr>
  );
};

export default StudentCard;
