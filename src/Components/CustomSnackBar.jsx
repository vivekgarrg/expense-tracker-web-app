import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Stack } from "@mui/system";
import { ExpenseContext } from "../Context/ExpenseContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar() {
  const [open, setOpen] = React.useState(true);
  const [severity, setSeverity] = React.useState("");
  const [message, setMessage] = React.useState("");

  const { snackBar, setSnackBar } = React.useContext(ExpenseContext);
  const handleClose = () =>
    setSnackBar({ open: false, message: "", severity: "" });

  useEffect(() => {
    setOpen(snackBar.open);
    setMessage(snackBar.message);
    setSeverity(snackBar.severity);
  }, [snackBar]);

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}
