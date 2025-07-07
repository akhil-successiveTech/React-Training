// Create a theme switcher application using the useContext hook. Create a context to manage the current 
// theme (e.g., light or dark). Provide a button to toggle between the two themes.

"use client"

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        // Style the page
        <div style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            minHeight: "100vh",
            padding: "1rem"
        }}>
        <h1>Hello, {theme} mode!</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    )
}

export default Home;