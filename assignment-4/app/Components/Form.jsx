"use client"
import { useState } from "react";

const Form = () => {
  // Created a form with useState
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    agreeToTerms: false,
  });

  // Function to add input values into form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Function to handle the submit 
  const handleSubmit = (e) => {
    // Prevent rerendering
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    // Created a UI
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label>
        Name:
        <input 
        type="text" 
        style={{border: "2px solid black"}}
        name="name" 
        value={form.name} 
        onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input 
        type="email" 
        style={{border: "2px solid black"}}
        name="email"
        value={form.email} 
        onChange={handleChange} />
      </label>
      <br />

      <div>
        Gender:
        <label>
          <input 
          type="radio" 
          value="male" 
          name="gender"
          onChange={handleChange} 
          checked={form.gender === "male"} />
          Male
        </label>
        <label>
          <input 
          type="radio" 
          value="female" 
          name="gender"
          onChange={handleChange} 
          checked={form.gender === "female"} />
          Female
        </label>
      </div>
      <br />

      <label>
        <input 
        type="checkbox" 
        name="agreeToTerms" 
        checked={form.agreeToTerms} 
        onChange={handleChange} />
        I agree to the terms and conditions
      </label>
      <br />

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form
