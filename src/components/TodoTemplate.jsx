/** @jsxImportSource @emotion/react */
import React from "react";

import { css } from "@emotion/react";
import { Box, Typography, Grid } from "@mui/material";

const TodoTemplateStyle = css`
  width: 350px;
  padding: 40px 50px;
  margin: 150px auto 0;
  background-color: #adc4ce;
  box-shadow: 10px 10px 10px #c1c0b9;
  border-radius: 24px;
`;

const DateStyle = css`
  display: flex;
  align-items: center;
`;

const DateFontStyle = css`
  font-family: "Bellota";
  font-weight: bold;
  font-size: 40px;
`;

const MonthFontStyle = css`
  font-size: 14px;
  font-family: "Roboto";
`;

const TitleStyle = css`
  color: #f1f0e8;
  font: italic 700 35px "Roboto Condensed";
  letter-spacing: -0.5px;
`;

const TodoTemplate = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = [
    "JAN",
    "FAB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return (
    <Box css={TodoTemplateStyle}>
      <Grid container justifyContent={"space-between"}>
        <Grid item css={DateStyle}>
          <Typography mr={1} fontWeight css={DateFontStyle}>
            {day}
          </Typography>
          <Box>
            <Typography css={MonthFontStyle}>{month}</Typography>
            <Typography css={MonthFontStyle}>{year}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography css={TitleStyle}>TODO LIST</Typography>
        </Grid>
      </Grid>
      <div>{children}</div>
    </Box>
  );
};

export default TodoTemplate;
