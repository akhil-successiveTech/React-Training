"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";


const Child = () => {
  const { loggedIn, userName, login, logout } = useAuth();
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: dark? "black" : "white", color: dark? "white" : "black"
      }} className="parent"
             >
      {loggedIn ? (
        <button
          style={{backgroundColor:dark? "black" : "white", color: dark? "white" : "black"}}
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
          style={{backgroundColor:dark? "black" : "white", color: dark? "white" : "black"}}
          onClick={login}
        >
          Login
        </button>
      )}
      <h1 style={{backgroundColor:dark? "black" : "white", color: dark? "white" : "black"}}>{loggedIn ? `Welcome, ${userName}!` : "Please log in."}</h1>
      <h2 style={{backgroundColor:dark? "black" : "white", color: dark? "white" : "black"}}>Current Theme: {dark ? `Dark` : "Light"}</h2>
      <button style={{ width:"10rem"}} onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Child;