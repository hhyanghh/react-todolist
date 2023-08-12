import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheck }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} onCheck={onCheck} />
      ))}
    </>
  );
};

export default TodoList;
