import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExpenseProvider } from "./Context/ExpenseContext";
import GlobalCssOverride from "./utils/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalCssOverride>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </GlobalCssOverride>
);
