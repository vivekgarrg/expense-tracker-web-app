import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { CircularProgress, styled, Typography } from "@mui/material";
import { useExpenses } from "../api/componentAction";
import MonthFilter from "../Components/MonthFilter";
import ExpenseTable from "../Components/ExpenseTable";
import { ExpenseContext } from "../Context/ExpenseContext";

export default function Tracker() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const [month, setMonth] = useState("");

  const { data, isLoading, isError } = useExpenses();

  const monthFiletring = useMemo(() => {
    return data?.expense.filter((expense) =>
      expense.date.includes(month.toString())
    );
  }, [month, data]);

  const totalValue = useMemo(() => {
    return expenses.reduce((prev, curr) => prev + parseInt(curr.amount), 0);
  }, [expenses]);

  const { setShowModal } = React.useContext(ExpenseContext);
  const handleAdd = () => {
    setShowModal({ open: true, action: "add", heading: "Add Expense" });
  };

  useEffect(() => {
    if (data) {
      setExpenses(data.expense);
      setTotal(data.total);
    }
    if (month !== "") {
      setExpenses(monthFiletring);
      setTotal(totalValue);
    }
    setLoading(isLoading);
    setError(isError);
  }, [data, isLoading, isError, monthFiletring, month, totalValue]);

  const StyledContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    marginTop: "4rem",
    padding: "1rem",
    "& .total": {
      display: "flex",
      padding: "0.4rem",
      justifyContent: "space-between",
      fontWeight: "600",
      "& .one": {
        color: theme.palette.primary.main,
        display: "flex",
        gap: "1rem",
      },
    },
  }));

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return <div>Error!!</div>;
  }
  return (
    <StyledContainer>
      <Box className="total">
        <MonthFilter value={month} onChange={(e) => setMonth(e.target.value)} />
        <Box className="one">
          <Typography sx={{ fontWeight: "600" }}>
            Total: &nbsp; <span style={{ color: "#ED6E52" }}>₹{total}</span>
          </Typography>
          |
          <Typography
            onClick={handleAdd}
            sx={{ fontWeight: "600", cursor: "pointer" }}
          >
            + Add
          </Typography>
        </Box>
      </Box>
      <Box className="table">
        <ExpenseTable rows={expenses} />
      </Box>
    </StyledContainer>
  );
}
