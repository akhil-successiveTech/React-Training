"use client"
import { useState } from "react";

const DropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h2>Select a Fruit</h2>
      
      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Choose one --</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>

      {selectedOption && (
        <p>You selected: <strong>{selectedOption}</strong></p>
      )}
    </div>
  );
}

export default DropdownExample;