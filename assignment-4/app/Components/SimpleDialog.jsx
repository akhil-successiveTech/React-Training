"use client"
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";

export default function SimpleDialog() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log("Input Submitted:", input);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Input</DialogTitle>

        <DialogContent>
          <Typography>Enter something below:</Typography>
          <TextField
            fullWidth
            autoFocus
            margin="dense"
            label="Your Text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
