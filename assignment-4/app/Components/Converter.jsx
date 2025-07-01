"use client"
import { useState } from "react";

const TemperatureConverter = () => {
  // State for celsius
  const [celsius, setCelsius] = useState("");
  // State for fahrenheit
  const [fahrenheit, setFahrenheit] = useState("");

  // Function to convert celsius to fahrenheit
  const handleCelsius = (e) => {
    const value = e.target.value;
    setCelsius(value);

    // If the value is blank
    if (value === "" || isNaN(value)) {
      setFahrenheit("");
    } else { // Simple formula
      const f = (parseFloat(value) * 9) / 5 + 32;
      // Up to 2 decimal places
      setFahrenheit(f.toFixed(2));
    }
  };

  // Function to convert fahrenheit to celsius
  const handleFahrenheit = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    // If value is blank
    if (value === "" || isNaN(value)) {
      setCelsius("");
    } else { // Simple formula
      const c = ((parseFloat(value) - 32) * 5) / 9;
      // Up to 2 decimal places
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      {/* Taking input in celsius */}
      <label>
        Celsius:
        <input
          type="text"
          value={celsius}
          style={{border: "2px solid black"}}
          onChange={handleCelsius}
          placeholder="Enter °C"
        />
      </label>
      <br />
      {/* Taking input in fahrenheit */}
      <label>
        Fahrenheit:
        <input
          type="text"
          value={fahrenheit}
          style={{border: "2px solid black"}}
          onChange={handleFahrenheit}
          placeholder="Enter °F"
        />
      </label>
    </div>
  );
}

export default TemperatureConverter;