/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";

const TodoWriteStyle = css`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 0 20px;
`;

const ButtonStyle = css`
  font-size: 23px;
  color: #27374d;
  cursor: pointer;
`;

const TodoWrite = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form css={TodoWriteStyle} onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        variant="standard"
        fullWidth
        placeholder="할일을 입력하세요."
        onChange={handleChange}
        value={value}
      />
      <IconButton>
        <TbSquareRoundedPlusFilled css={ButtonStyle} />
      </IconButton>
    </form>
  );
};

export default TodoWrite;
