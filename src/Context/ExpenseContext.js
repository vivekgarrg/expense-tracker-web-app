import React, { useState } from "react";

export const ExpenseContext = React.createContext();

export const ExpenseProvider = ({ children }) => {
  const [showModal, setShowModal] = useState({
    action: "",
    open: false,
    heading: "",
    data: {},
  });

  const [snackBar, setSnackBar] = useState({
    message: "",
    open: false,
    severity: "",
  });
  return (
    <ExpenseContext.Provider
      value={{ showModal, setShowModal, snackBar, setSnackBar }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
