import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ExpenseContext } from "../Context/ExpenseContext";
import { useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import { Button, Typography } from "@mui/material";
import { deleteExpense } from "../api/componentAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [send, setSend] = React.useState({});

  const { showModal, setShowModal, setSnackBar } =
    React.useContext(ExpenseContext);
  const handleClose = () => setShowModal({ open: false });

  const handleDelete = async () => {
    const { data } = await deleteExpense(send.id);
    if (data)
      setSnackBar({ open: true, message: "Success", severity: "success" });
    else
      setSnackBar({
        open: true,
        message: "Something Went Wrong...",
        severity: "error",
      });
    setShowModal({ open: false });
  };

  useEffect(() => {
    setOpen(showModal.open);
    if (showModal.action === "update") {
      const { amount, remarks, date, _id, payment_mode } = showModal?.data;
      const localDate = new Date(date).toISOString().substring(0, 10);
      const yes = {
        amount,
        remarks,
        date: localDate,
        id: _id,
        payment_mode,
        update: true,
      };
      setSend(yes);
    }
  }, [showModal]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              bgcolor: "primary.main",
              textAlign: "left",
              pl: 2,
              p: 1,
              color: "white",
            }}
          >
            {showModal.heading}
          </Typography>
          {showModal.action === "add" ? (
            <ExpenseForm />
          ) : (
            <>
              <ExpenseForm {...send} />
              <Box sx={{ p: 2 }}>
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  color="error"
                  fullWidth
                >
                  Dlete
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
