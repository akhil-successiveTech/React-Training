"use client"
import { createContext, useState } from "react";

// Created context
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    // Assigned the theme as light by default
    const [theme, setTheme] = useState("light");

    // Function to change the value of theme
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return(
        // Pass the theme and function as value of context
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}