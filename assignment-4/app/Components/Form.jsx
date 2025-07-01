"use client"
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />

      <div>
        Gender:
        <label>
          <input type="radio" name="gender" value="male" onChange={handleChange} checked={formData.gender === "male"} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={handleChange} checked={formData.gender === "female"} />
          Female
        </label>
      </div>
      <br />

      <label>
        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
        I agree to the terms and conditions
      </label>
      <br />

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form
