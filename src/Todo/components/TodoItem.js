// src/TodoItem.js
import React from "react";
import { useTodo } from "../context/TodoContext";
import "../../Todo.css";

function TodoItem({ task }) {
  const { dispatch } = useTodo();

  const toggleTask = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const removeTask = () => {
    dispatch({ type: "REMOVE_TASK", payload: task.id });
  };

  return (
    <div
      className="todoContainer"
    >
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleTask}
          className="checkBoxInput"
        />
        <label
          style={
            task.completed ? { textDecoration: "line-through", color: "gray" }:{}
          }
        >
          {task.text}
        </label>
      </div>
      <button
        className="removeButton"
        onClick={removeTask}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
