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
  // State to open the dialog
  const [open, setOpen] = useState(false);
  // State to get input from user
  const [input, setInput] = useState("");

  // Function to handle open and closing of dialog
  const handleWindow = () => {
    setOpen((prev) => (!prev));
  }

  // Function to display input data and close window
  const handleSubmit = () => {
    console.log("Input Submitted:", input);
    handleWindow();
  };

  return (
    <div>
      {/* MUI components */}
      <Button variant="contained" onClick={handleWindow}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleWindow}>
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
          <Button onClick={handleWindow}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
