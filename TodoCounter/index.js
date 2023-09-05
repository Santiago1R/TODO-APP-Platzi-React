import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

export function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h1 className="title-counter">
      Has completado {completedTodos} de {totalTodos} TODOS
    </h1>
  );
}
