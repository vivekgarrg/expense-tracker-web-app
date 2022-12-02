import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import ExpenseForm from "../Components/ExpenseForm";
import { CircularProgress, styled, Typography } from "@mui/material";
import Expense from "../Components/Expense";
import { useExpenses } from "../api/componentAction";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import MonthFilter from "../Components/MonthFilter";

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
      height: "98%",
      overflow: "hidden",
    },
    "& .two-1": {
      height: "80%",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#ab47bc",
        borderRadius: "10px",
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
      <Box className="one">
        <ExpenseForm />
      </Box>
      <Box className="two">
        <Typography variant="h5" sx={{ p: 1 }} align="center">
          Expenses
        </Typography>
        <Box sx={{ pl: 2, pr: 2 }}>
          <Expense total={total} />
        </Box>
        <Box
          sx={{
            maxWidth: "100%",
            background: "#ff7043",
            marginBottom: "1rem",
            borderRadius: "5px",
            color: "white",
            m: 2,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row">
            <Typography>Total</Typography>
            <MonthFilter
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </Stack>
          <Stack direction="row">
            <Typography>₹ {total} </Typography>
          </Stack>
        </Box>
        <Box className="two-1" sx={{ p: 2 }}>
          {expenses.map((val) => (
            <Link
              key={val._id}
              style={{ textDecoration: "none" }}
              to={`expense/${val._id}`}
            >
              <Expense val={val} />
            </Link>
          ))}
        </Box>
      </Box>
    </StyledContainer>
  );
}
