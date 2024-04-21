import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";
// import "./index.css";
let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];
export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(newTodo) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: newTodo,
        done: false,
      },
    ]);
  }
  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) return nextTodo;
        else return t;
      })
    );
  }
  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((f) => f.id !== todoId));
  }
  function moveTodoUp(todoIndex) {
    const nextTodos = [...todos];
    if (todoIndex > 0) {
      [nextTodos[todoIndex], nextTodos[todoIndex - 1]] = [
        nextTodos[todoIndex - 1],
        nextTodos[todoIndex],
      ];
    }
    setTodos(nextTodos);
  }
  function moveTodoDown(todoIndex) {
    const nextTodos = [...todos];
    if (todoIndex < nextTodos.length - 1) {
      [nextTodos[todoIndex], nextTodos[todoIndex + 1]] = [
        nextTodos[todoIndex + 1],
        nextTodos[todoIndex],
      ];
    }
    setTodos(nextTodos);
  }
  return (
    <div className="todo-container">
      <div className="todo-app">
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
          moveTodoUp={moveTodoUp}
          moveTodoDown={moveTodoDown}
        />
      </div>
    </div>
  );
}
