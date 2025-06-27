// /components/Parent.js
"use client";

import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoized increment function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // Memoized reset function
  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Parent Component</h2>
      <Child count={count} onIncrement={increment} onReset={reset} />
    </div>
  );
};

export default Parent;
