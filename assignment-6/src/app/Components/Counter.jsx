"use client"
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f2f5"
    }}>
      <div style={{
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        textAlign: "center",
        minWidth: "200px"
      }}>
        <h2>Counter: {count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;