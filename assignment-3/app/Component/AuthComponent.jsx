"use client";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AuthComponent = () => {
  const { loggedIn, userName, handleAuth, handleLogout } =
    useContext(AuthContext);

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
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          style={{ padding: "10px", fontSize: "1rem" }}
          onClick={handleAuth}
        >
          Login
        </button>
      )}
      <h1>{loggedIn ? `Welcome, ${userName}!` : "Please log in."}</h1>
    </div>
  );
};

export default AuthComponent;