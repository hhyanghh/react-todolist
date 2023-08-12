/** @jsxImportSource @emotion/react */
import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin } from "react-icons/im";
import { GiRoundStar } from "react-icons/gi";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";

const ItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

const CheckedTextStyle = css`
  text-decoration: line-through;
`;

const TodoItem = ({ todo, onCheck, onRemove }) => {
  const { id, text, checked, star } = todo;

  return (
    <Box css={ItemStyle}>
      {/* <div>체크박스 텍스트 별표아이콘 삭제아이콘</div> */}
      <Box css={ItemStyle} onClick={() => onCheck(id)}>
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        <Typography css={checked && CheckedTextStyle}>{text}</Typography>
      </Box>
      <Box>
        <IconButton>
          <GiRoundStar />
        </IconButton>
        <IconButton onClick={() => onRemove(id)}>
          <ImBin />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;

//ImCheckboxUnchecked
//ImCheckboxChecked
