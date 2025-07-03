"use client"
import { useState } from "react";

const Dropdown = () => {
  // State to handle the options
  const [option, setOption] = useState("");

  // Function to set option
  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <h2>Select a Fruit</h2>
      <select style={{border: "2px solid black"}} value={option} onChange={handleChange}>
        <option value="">-- Choose one --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>

      {option && (
        <p>You selected: <strong>{option}</strong></p>
      )}
      {/* This is conditional rendering */}
    </div>
  );
}

export default Dropdown;