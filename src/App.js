import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import { createTheme, ThemeProvider } from "@mui/material";
import TodoWrite from "./components/TodoWrite";
import TodoList from "./components/TodoList";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial",
  },
});

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리엑트 공부하기",
      checked: false,
      star: false,
    },
  ]);

  const nextId = useRef(2);

  const onAdd = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  console.log(todos, "todos");

  const onCheck = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <TodoTemplate>
          <TodoWrite onAdd={onAdd} />
          <TodoList todos={todos} onCheck={onCheck} />
        </TodoTemplate>
      </ThemeProvider>
    </>
  );
};

export default App;
