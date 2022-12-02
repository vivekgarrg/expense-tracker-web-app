import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useExpenseById } from "../api/componentAction";
import ExpenseCard from "./ExpenseCard";
export default function EditExpense() {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  let { id } = useParams();

  const { data, isLoading, isError } = useExpenseById(id);

  useEffect(() => {
    setLoading(isLoading);
    setError(isError);
  }, [isLoading, isError]);

  if (error) {
    return <div>Error...</div>;
  }
  if (loading) {
    return <div> Loadin...</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data && <ExpenseCard data={data} id={id} />}
    </Box>
  );
}
