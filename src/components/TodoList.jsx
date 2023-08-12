import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheck, onRemove, onImportant }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onCheck={onCheck}
          key={todo.id}
          onRemove={onRemove}
          onImportant={onImportant}
        />
      ))}
    </>
  );
};

export default TodoList;
