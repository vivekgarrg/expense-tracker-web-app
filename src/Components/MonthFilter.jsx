import React from "react";

//@mui
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

//Styling
const Search = styled(Box)(({ theme }) => ({
  alignSelf: "center",
  "& .MuiOutlinedInput-input": {
    fontSize: "12px",
    background: "#FFFFFF",
    borderRadius: "4px",
    height: "1.8rem",
    width: "7rem",
    color: theme.palette.primary.main,
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      width: "1rem",
    },
  },
}));

export default function MonthFilter({ value, onChange }) {
  return (
    <Search>
      <TextField
        type="month"
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          className: "text-field-style",
        }}
      />
    </Search>
  );
}
