"use client"
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function MUIForm() {
  // State for form
  const [form, setForm] = useState({ name: "", email: "" });

  // State for error
  const [errors, setErrors] = useState({ name: "", email: "" });

  // Function to handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Add values into form
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Make the errors values corresponding to form empty
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    // Created new object for errors
    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Enter a valid name";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    // Check if there is any error
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    // Prevent re-rendering
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted!", form);
    }
  };

  return (
    // Components of MUI are used
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 300, mx: "auto", mt: 4 }}
    >
      <Typography variant="h6" gutterBottom>
        Simple Form
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </Box>
  );
}
