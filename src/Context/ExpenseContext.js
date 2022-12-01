import React from "react";

export const ExpenseContext = React.createContext();

export const ExpenseProvider = ({ children }) => {
  return (
    <ExpenseContext.Provider value={{}}>{children}</ExpenseContext.Provider>
  );
};
