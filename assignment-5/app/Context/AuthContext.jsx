"use client";
import { createContext, useContext, useState } from "react";
// Created context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Created a state to manage user authentication
  const [user, setUser] = useState(null); // null = not logged in
  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return (
    // Can use this context in all the children
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
