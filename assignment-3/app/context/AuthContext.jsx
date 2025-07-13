// app/context/AuthContext.tsx
"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Akhil");
  const [loading, setLoading] = useState(true);

  const login = () => {
    const user = "akhil"
    setUserName(user);
    setLoggedIn(true);
    localStorage.setItem("authUser", JSON.stringify({ userName: user }));
  };

  const logout = () => {
    setUserName("");
    setLoggedIn(false);
    localStorage.removeItem("authUser");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser?.userName) {
      setUserName(storedUser.userName);
      setLoggedIn(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, userName, login, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
