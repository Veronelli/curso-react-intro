import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h1 className={`TodoCounter ${!!loading && 'loading-counter'}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };
