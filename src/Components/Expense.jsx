import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Expense({ val, total }) {
  if (total) {
    return (
      <Box
        sx={{
          maxWidth: "100%",
          background: "#ff7043",
          marginBottom: "1rem",
          borderRadius: "5px",
          color: "white",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row">
          <Typography>Total</Typography>
        </Stack>
        <Stack direction="row">
          <Typography>₹ {total} </Typography>
        </Stack>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        maxWidth: "100%",
        background: "#ab47bc",
        marginBottom: "1rem",
        borderRadius: "5px",
        color: "white",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row">
        <Typography>₹ {val?.amount || val?.ammount} </Typography> &nbsp;&nbsp;
        |&nbsp;&nbsp;
        <Typography>{new Date(val?.date).toDateString()}</Typography>
      </Stack>
      <Stack direction="row">
        <Typography>{val?.remarks} </Typography>
      </Stack>
    </Box>
  );
}
