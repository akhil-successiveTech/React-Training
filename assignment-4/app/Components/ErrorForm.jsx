"use client"
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  List,
  ListItem,
} from "@mui/material";

// Created validation using yup
const validationSchema = Yup.object({
  name: Yup.string()
  .required("Name is required"),
  email: Yup.string()
  .email("Invalid email")
  .required("Email is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .min(1, "Must be at least 1")
    .required("Age is required"),
});


export default function ErrorForm() {
  // Creating the form values using Formik library
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Form submitted successfully!");
      console.log("Submitted:", values);
    },
  });

  // Checks if there is some error and user tried to submit the form
  const hasErrors = Object.keys(formik.errors).length > 0 && formik.submitCount > 0;

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", mt: 4 }}
    >
      <Typography variant="h6" gutterBottom>
        User Form
      </Typography>

      
      {hasErrors && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Please fix the following errors:
          <List dense>
            {Object.entries(formik.errors).map(([field, error]) => (
              <ListItem key={field} sx={{ pl: 2, fontSize: 14 }}>
                - {error}
              </ListItem>
            ))}
          </List>
        </Alert>
      )}

      <TextField
        fullWidth
        label="Name"
        name="name"
        margin="normal"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        label="Age"
        name="age"
        margin="normal"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}
