"use client"

import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({children}){
    const [language, setLanguage] = useState("en");

    const switchLanguage = () => {
        setLanguage(prev => (prev === "en" ? "es" : "en"));
    };

    return(
        <LanguageContext.Provider value={{language, switchLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}