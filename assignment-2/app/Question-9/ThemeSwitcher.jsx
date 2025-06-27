"use client"

import { useContext, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"

export default function ThemeSwitcher(){
    const{ theme, toggleTheme}  = useContext(ThemeContext);

    return(
        <div style={{backgroundColor: theme === "light" ? "#fff" : "#333", 
        color: theme === "light" ? "#000" : "#fff", height: "100vh"}}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}> Toggle Theme</button>
        </div>
    )
}