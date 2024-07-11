import React from "react";
import trash from "/trash-solid.svg";
import "./style.css";
function TodoItem({ todo, toggleComplete, removeTodo, filter }) {
  return (
    <div className="formCheck">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          fontSize: "20px",
        }}
      >
        {todo.text}
      </span>
      {filter === "completed" && (
        <img
          src={trash}
          alt=""
          onClick={() => removeTodo(todo.id)}
          style={{
            border: "none",
            width: "15px",
            position: "absolute",
            right: "0",
          }}
          className="deleteBtn"
        />
      )}
    </div>
  );
}

export default TodoItem;
