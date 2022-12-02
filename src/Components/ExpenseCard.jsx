import * as React from "react";
import Card from "@mui/material/Card";
import ExpenseForm from "./ExpenseForm";
import { Button, Typography, Box } from "@mui/material";
import { deleteExpense } from "../api/componentAction";
import { useNavigate } from "react-router-dom";

export default function ExpenseCard({ data, id }) {
  const { expense } = data;

  const { ammount, amount, remarks, date } = expense;
  const propss = {
    ammount,
    amount,
    remarks,
    date,
    update: true,
    id,
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    const { data } = await deleteExpense(id);
    if (data) {
      navigate("/");
    }
  };
  return (
    <Card>
      <Typography
        align="center"
        sx={{ fontWeight: "600", fontSize: "20px", color: "violet" }}
      >
        Expense Update
      </Typography>
      <ExpenseForm {...propss} />
      <Box sx={{ p: 2 }}>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="error"
          fullWidth
        >
          Dlete
        </Button>
      </Box>
    </Card>
  );
}
