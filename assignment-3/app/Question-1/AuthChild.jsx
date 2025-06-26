// /components/AuthChild.js
"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";

const AuthChild = () => {
  const { auth, login } = useAuth();

  const handleLogin = () => {
    login("Akhil");
  };

  return (
    <div>
      {auth.isLoggedIn ? (
        <p>Welcome, {auth.username}!</p>
      ) : (
        <>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthChild;
