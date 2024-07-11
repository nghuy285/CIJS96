import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Tabs, Tab, Button } from "@mui/material";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  const removeAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <div className="todo">
      <h1>#todo</h1>
      <Tabs value={filter} onChange={handleChange} className="TabList">
        <Tab label="All" value="all" style={{ padding: "0 70px" }} />
        <Tab label="Active" value="active" style={{ padding: "0 70px" }} />
        <Tab
          label="Completed"
          value="completed"
          style={{ padding: "0 70px" }}
        />
      </Tabs>
      {filter !== "completed" && <TodoForm addTodo={addTodo} />}

      <div className="todoListApp">
        <TodoList
          todos={filteredTodos()}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          filter={filter}
          className="todoListApp"
        />
        {filter === "completed" && todos.some((todo) => todo.completed) && (
          <Button
            variant="contained"
            color="error"
            onClick={removeAllCompleted}
            className="deleteAll"
          >
            Delete All
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
