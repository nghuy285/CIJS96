import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, removeTodo, filter }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          filter={filter}
        />
      ))}
    </div>
  );
}

export default TodoList;
