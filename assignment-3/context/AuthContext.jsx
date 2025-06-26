// /context/AuthContext.js
"use client";

import React, { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Hook for accessing context easily
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    username: "",
  });

  const login = (username) => {
    setAuth({ isLoggedIn: true, username });
  };

  const logout = () => {
    setAuth({ isLoggedIn: false, username: "" });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
