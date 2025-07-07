"use client";

import React from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const UserPreferences = () => {
  // Load the user's theme preference from localStorage (default to "light")
  const [theme, setTheme, clearTheme] = useLocalStorage("user-theme", "light");

  // Define styles for both light and dark themes
  const themes = {
    light: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    dark: {
      backgroundColor: "#1e1e1e",
      color: "#ffffff",
    },
  };

  // Choose the current style based on the theme
  const currentThemeStyle = themes[theme] || themes.light;

  return (
    <div style={{ ...currentThemeStyle, padding: 20, minHeight: "100vh" }}>
      <h2>User Preferences</h2>

      <p>
        Your selected theme is: <strong>{theme}</strong>
      </p>

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setTheme("light")}>☀️ Light Mode</button>
        <button onClick={() => setTheme("dark")} style={{ marginLeft: 10 }}>
          Dark Mode
        </button>
        <button onClick={clearTheme} style={{ marginLeft: 10 }}>
          Clear Preference
        </button>
      </div>
    </div>
  );
};

export default UserPreferences;
