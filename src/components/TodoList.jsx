import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheck, onRemove }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onCheck={onCheck}
          key={todo.id}
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default TodoList;
