import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import "./style.css";
function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({
        id: Date.now(),
        text: input,
        completed: false,
      });
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputForm">
        <TextField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="Add details"
          variant="outlined"
          style={{ width: "450px", marginRight: "20px", marginBottom: "10px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="inputBtn"
        >
          Add
        </Button>
      </div>
    </form>
  );
}

export default TodoForm;
