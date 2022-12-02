import React from "react";

//@mui
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

//Styling
const Search = styled(Box)(({ theme }) => ({
  alignSelf: "center",
  marginLeft: "1rem",
  "& .MuiOutlinedInput-input": {
    width: "100px",
    fontSize: "12px",
    background: "#FFFFFF",
    borderRadius: "4px",
    height: "1.8rem",
    color: "#222222",
    margin: 0,
    padding: 0,
  },
  "& .search-icon": {
    color: "#ED6E52",
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
