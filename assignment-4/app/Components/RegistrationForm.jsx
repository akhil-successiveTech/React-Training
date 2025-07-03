"use client"
import { useState } from "react";

const RegistrationForm = () => {
  // Created state of passwords
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  // Created state to handle error
  const [error, setError] = useState("");

  // Stores the values into form useState
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent to reload the page
    e.preventDefault();

    // Checks that they are not same and stop execution
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Set error as empty
    setError("");
    console.log("Registration Successful", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type="password"
          name="password"
          style={{border: "2px solid black"}}
          value={form.password}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          style={{border: "2px solid black"}}
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* This is conditional rendering */}

      <button style={{border: "2px solid black"}} type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;