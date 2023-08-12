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

const ImportantStyle = css`
  color: #f7d060;
`;

const TodoItem = ({ todo, onCheck, onRemove, onImportant }) => {
  const { id, text, checked, star } = todo;

  return (
    <Box css={ItemStyle}>
      <Box onClick={() => onCheck(id)} css={ItemStyle}>
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        <Typography css={checked && CheckedTextStyle}>{text}</Typography>
      </Box>
      <Box>
        <IconButton onClick={() => onImportant(id)}>
          <GiRoundStar css={star && ImportantStyle} />
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
// style={{ order: star ? -1 : 0 }}
