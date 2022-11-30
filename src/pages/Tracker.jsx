import React, { useContext, useMemo } from "react";
import Box from "@mui/material/Box";
import ExpenseForm from "../Components/ExpenseForm";
import { styled, Typography } from "@mui/material";
import { ExpenseContext } from "../Context/ExpenseContext";
import Expense from "../Components/Expense";

export default function Tracker() {
  const StyledContainer = styled(Box)(({ theme }) => ({
    width: "100vw",
    height: "89vh",
    marginTop: "11vh",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "& .one": {
      flex: 1,
    },
    "& .two": {
      flex: 1,
    },
  }));

  const { expense } = useContext(ExpenseContext);
  const getTotalExpense = useMemo(() => {
    return expense.reduce((prev, curr) => prev + parseInt(curr.amount), 0);
  }, [expense]);
  return (
    <StyledContainer>
      <Box className="one">
        <ExpenseForm />
      </Box>
      <Box className="two">
        <Typography variant="h5" sx={{ p: 1 }} align="center">
          Expenses
        </Typography>
        {console.log(expense)}
        <Box sx={{ p: 2 }}>
          {expense.map((val, ind) => (
            <Expense key={ind} val={val} />
          ))}
          <Expense total={getTotalExpense} />
        </Box>
      </Box>
    </StyledContainer>
  );
}
