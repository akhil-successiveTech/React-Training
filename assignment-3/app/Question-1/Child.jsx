"use client";
import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";

const Child = () => {
  const { loggedIn, userName, login, logout } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      {loggedIn ? (
        <button
          style={{ padding: "10px", fontSize: "1rem" }}
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
          style={{ padding: "10px", fontSize: "1rem" }}
          onClick={login}
        >
          Login
        </button>
      )}
      <h1>{loggedIn ? `Welcome, ${userName}!` : "Please log in."}</h1>
    </div>
  );
};

export default Child;