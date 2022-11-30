import React, { useContext, useState } from "react";
import { Box } from "@mui/system";
import { Button, Stack, TextField } from "@mui/material";
import { ExpenseContext } from "../Context/ExpenseContext";

export default function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const { addExpense } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount, date, remarks });
  };
  return (
    <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            fullWidth
            required
          />
          <TextField
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            fullWidth
            required
          />
          <TextField
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Remarks"
            fullWidth
            required
          />
          <Button
            sx={{
              bgcolor: "#ab47bc",
              ["&:hover"]: {
                bgcolor: "#ab47bc",
              },
            }}
            variant="contained"
            type="submit"
            disableElevation
            disableRipple
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
