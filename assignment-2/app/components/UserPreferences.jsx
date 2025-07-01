"use client";

import React from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const UserPreferences = () => {
  const [theme, setTheme, removeTheme] = useLocalStorage("user-theme", "light");

  return (
    <div style={{ padding: 20 }}>
      <h2>User Preferences</h2>
      <p>Selected Theme: <strong>{theme}</strong></p>

      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")} style={{ marginLeft: 10 }}>
        Dark Mode
      </button>
      <button onClick={removeTheme} style={{ marginLeft: 10 }}>
        Clear Preference
      </button>
    </div>
  );
};

export default UserPreferences;
