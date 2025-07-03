// Develop a language switcher application using the useContext hook. Create a context to manage the 
// current language (e.g., English or Spanish). Provide buttons to switch between languages. Use useContext for this

"use client"
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const Home = () => {
    // Using states and functions from Language Context
    const {language, LanguageToggler} = useContext(LanguageContext)

    return(
        <div>
            <p>{language}</p>
            <button onClick={LanguageToggler}>Change it!</button>
        </div>
    )
}

export default Home;