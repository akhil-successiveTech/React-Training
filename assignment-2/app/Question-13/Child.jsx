// /components/Child.js
"use client";

import React from "react";

const Child = ({ count, onIncrement, onReset }) => {
  return (
    <div style={{ border: "1px solid gray", padding: 20 }}>
      <h3>Child Component</h3>
      <p>Current Count: {count}</p>
      <button onClick={onIncrement}>Increment Count</button>
      <button onClick={onReset} style={{ marginLeft: 10 }}>
        Reset Count
      </button>
    </div>
  );
};

export default Child;
