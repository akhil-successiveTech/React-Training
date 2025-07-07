"use client";
import React, { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";
import { AuthContext } from "@/context/AuthContext";

const Child = () => {
  const { loggedIn, userName, handleAuth, handleLogout } =
    useContext(AuthContext);
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        gap:"1rem",
        flexDirection:"column"
      }}
    >
      {loggedIn ? (
        <button
          style={{ width:"10rem" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          style={{width:"10rem"}}
          onClick={handleAuth}
        >
          Login
        </button>
      )}
      <h1>{loggedIn ? `Welcome, ${userName}!` : "Please log in."}</h1>
      <h2 style={{backgroundColor:dark?"black":"white", color:dark?"white":"black"}}>Current Theme: {dark ? `Dark` : "Light"}</h2>
      <button style={{ width:"10rem"}} onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Child;