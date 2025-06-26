// /components/AuthParent.js
"use client";

import React from "react";
import { AuthProvider } from "./AuthContext";
import AuthChild from "./AuthChild";

const AuthParent = () => {
  return (
    <AuthProvider>
      <div style={{ padding: 20 }}>
        <h2>Authentication Example</h2>
        <AuthChild />
      </div>
    </AuthProvider>
  );
};

export default AuthParent;
