import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ExpenseForm from "../Components/ExpenseForm";
import { CircularProgress, styled, Typography } from "@mui/material";
import Expense from "../Components/Expense";
import { useExpenses } from "../api/componentAction";

export default function Tracker() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);

  const { data, isLoading, isError } = useExpenses();
  console.log(data);

  useEffect(() => {
    if (data) {
      setExpenses(data.expense);
      setTotal(data.total);
    }
    setLoading(isLoading);
    setError(isError);
  }, [data, isLoading, isError]);

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
        <Box className="two-1" sx={{ p: 2 }}>
          {expenses.map((val, ind) => (
            <Expense key={ind} val={val} />
          ))}
        </Box>
      </Box>
    </StyledContainer>
  );
}
