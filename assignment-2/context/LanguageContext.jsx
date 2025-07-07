"use client"
import { createContext, useState } from "react";

// Context created
export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    // Created a state of language
    const[language, setLanguage] = useState("This is english - English");

    // Change the language from english to spanish
    const LanguageToggler = () => {
        setLanguage((prev) => (prev === "This is english - English" ? "esto es español - Spanish" : 
        "This is english - English"))
    }

    // Returned the provider
    return(
        <LanguageContext.Provider value={{language, LanguageToggler}}>
            {children}
        </LanguageContext.Provider>
    )
}