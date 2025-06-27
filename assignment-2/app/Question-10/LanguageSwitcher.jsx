"use client";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useContext(LanguageContext);

  const labels = {
    en: {
      title: "Current Language: English",
      button: "Switch to Spanish"
    },
    es: {
      title: "Idioma actual: Español",
      button: "Cambiar a Inglés"
    }
  };

  return (
    <div>
      <h2>{labels[language].title}</h2>
      <button onClick={switchLanguage}>
        {labels[language].button}
      </button>
    </div>
  );
}