/** @jsxImportSource @emotion/react */
import React from "react";
import TodoItem from "./TodoItem";
import { css } from "@emotion/react";

const ListStyle = css`
  height: 280px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onCheck, onRemove, onImportant }) => {
  return (
    <div css={ListStyle}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onCheck={onCheck}
          key={todo.id}
          onRemove={onRemove}
          onImportant={onImportant}
        />
      ))}
    </div>
  );
};

export default TodoList;
