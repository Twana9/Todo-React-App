import React, { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="todo-input">
      <input
        value={title}
        placeholder="Add Todo"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="btn btn-add"
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
}
