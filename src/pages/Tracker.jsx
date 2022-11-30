import React from "react";
import Box from "@mui/material/Box";

export default function Tracker() {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Box sx={{ width: "50%", bgcolor: "red" }}></Box>
      <Box sx={{ width: "50%", bgcolor: "green" }}></Box>
    </Box>
  );
}
