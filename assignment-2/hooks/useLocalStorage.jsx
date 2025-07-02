// hooks/useLocalStorage.js
"use client";

import { useState } from "react";

// Custom hook to interact with localStorage
const useLocalStorage = (keyName, defaultValue) => {
  // Initialize state with value from localStorage or use default
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return defaultValue;

    try {
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return defaultValue;
    }
  });

  // Function to set value in localStorage
  const setValue = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(storedValue) : newValue;

      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(keyName, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  // Function to remove item from localStorage
  const removeValue = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(keyName);
        setStoredValue(null);
      }
    } catch (error) {
      console.error("Error removing from localStorage", error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
