import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { postExpense, updateExpense } from "../api/componentAction";
import { ExpenseContext } from "../Context/ExpenseContext";

export default function ExpenseForm({
  update,
  amount: amnt,
  remarks: rmks,
  ammount,
  date: dt,
  payment_mode: payment,
  id,
}) {
  const [amount, setAmount] = useState(update ? amnt || ammount : "");
  const [date, setDate] = useState(update ? dt : "");
  const [remarks, setRemarks] = useState(update ? rmks : "");
  const [payment_mode, setPaymentMode] = useState(
    update && payment ? payment : "upi"
  );

  const { setShowModal, setSnackBar } = React.useContext(ExpenseContext);

  const handleError = (data) => {
    if (data)
      setSnackBar({ open: true, message: "Success", severity: "success" });
    else
      setSnackBar({
        open: true,
        message: "Something Went Wrong...",
        severity: "error",
      });
    setShowModal({ open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postExpense(amount, date, remarks, payment_mode);
    if (data) {
      setAmount("");
      setDate("");
      setRemarks("");
    }
    handleError(data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const { data } = await updateExpense(
      id,
      amount,
      date,
      remarks,
      payment_mode
    );
    if (data) {
      setAmount("");
      setDate("");
      setRemarks("");
    }
    handleError(data);
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Payment payment_mode
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Payment payment_mode"
              defaultValue="upi"
              required
              value={payment_mode}
              onChange={(e) => setPaymentMode(e.target.value)}
            >
              <MenuItem value={"upi"}>UPI</MenuItem>
              <MenuItem value={"cash"}>CASH</MenuItem>
            </Select>
          </FormControl>
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
