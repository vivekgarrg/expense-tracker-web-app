import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpenseProvider } from "./Context/ExpenseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ExpenseProvider>
    <App />
  </ExpenseProvider>
);
