import React, { useEffect, useState } from "react";

export const ExpenseContext = React.createContext();

export const ExpenseProvider = ({ children }) => {
  const [expense, setExpense] = useState([]);

  const addExpense = (object) => {
    if (expense.length > 0) {
      let newVal = [...expense, object];
      console.log(newVal);
      setExpense([...newVal]);
      localStorage.setItem("expense", JSON.stringify(newVal));
    } else {
      let newVal = [object];
      console.log(newVal);
      setExpense([...newVal]);
      localStorage.setItem("expense", JSON.stringify(newVal));
    }
  };

  useEffect(() => {
    const expenses = localStorage.getItem("expense");
    if (expenses) {
      setExpense(JSON.parse(expenses));
    } else {
      setExpense([]);
    }
  }, []);

  return (
    <ExpenseContext.Provider value={{ expense, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
