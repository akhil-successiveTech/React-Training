"use client";

import React from "react";

export default function Button({ type = "primary", onClick, children }) {
  // Default styling
  let style = {
    padding: "8px 16px",
    borderRadius: "4px",
    fontWeight: "bold",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  // Style based on button type
  if (type === "primary") {
    style.backgroundColor = "#0070f3";
  } else if (type === "secondary") {
    style.backgroundColor = "#555";
  } else if (type === "danger") {
    style.backgroundColor = "#e00";
  }

  // Returns a button to click
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
