import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Stack, TextField } from "@mui/material";
import { postExpense, updateExpense } from "../api/componentAction";
import { useNavigate } from "react-router-dom";

export default function ExpenseForm({
  update,
  amount: amnt,
  remarks: rmks,
  ammount,
  date: dt,
  id,
}) {
  const [amount, setAmount] = useState(update ? amnt || ammount : "");
  const [date, setDate] = useState(update ? dt : "");
  const [remarks, setRemarks] = useState(update ? rmks : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postExpense(amount, date, remarks);
    if (data) {
      setAmount("");
      setDate("");
      setRemarks("");
    }
  };

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const { data } = await updateExpense(id, amount, date, remarks);
    if (data) {
      navigate("/");
    }
    if (data) {
      setAmount("");
      setDate("");
      setRemarks("");
    }
  };
  return (
    <Box sx={{ p: 2 }}>
      <form onSubmit={update ? handleUpdate : handleSubmit}>
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
