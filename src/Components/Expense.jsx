import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Expense({ val }) {
  return (
    <>
      {val ? (
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
            <Typography>₹ {val?.amount || val?.ammount} </Typography>{" "}
            <Typography
              sx={{
                display: {
                  sm: "none",
                  xs: "none",
                  lg: "block",
                  md: "block",
                },
              }}
            >
              &nbsp;&nbsp; |&nbsp;&nbsp;
              {new Date(val?.date).toDateString()}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography>{val?.remarks} </Typography>
          </Stack>
        </Box>
      ) : (
        <div>No Expense!!</div>
      )}
    </>
  );
}
