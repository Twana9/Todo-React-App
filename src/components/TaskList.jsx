import React, { useState } from "react";
export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
  moveTodoUp,
  moveTodoDown,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task
            todos={todos}
            todo={todo}
            onChangeTodo={onChangeTodo}
            onDeleteTodo={onDeleteTodo}
            moveTodoUp={moveTodoUp}
            moveTodoDown={moveTodoDown}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({
  todos,
  todo,
  onChangeTodo,
  onDeleteTodo,
  moveTodoUp,
  moveTodoDown,
}) {
  const [isEditing, setIsEditing] = useState(false);

  let content;
  if (isEditing) {
    content = (
      <>
        <p>
          <input
            className="todo-title-input"
            value={todo.title}
            onChange={(e) => {
              onChangeTodo({ ...todo, title: e.target.value });
            }}
          />
        </p>
        <button className="btn btn-save" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    content = (
      <>
        <p className="todo-title">{todo.title}</p>
        <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChangeTodo({ ...todo, done: e.target.checked });
        }}
      />
      {content}
      <button
        className="btn btn-move"
        onClick={() => moveTodoUp(todos.indexOf(todo))}
      >
        UP
      </button>
      <button
        className="btn btn-move"
        onClick={() => moveTodoDown(todos.indexOf(todo))}
      >
        Down
      </button>
      <button className="btn btn-delete" onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </>
  );
}
