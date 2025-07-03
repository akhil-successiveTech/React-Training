"use client";
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValueState] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null
        ? JSON.parse(storedValue)
        : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, value]);

  const setValue = (newValue) => {
    setValueState(newValue);
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  const getValue = () => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error("Error getting localStorage", error);
      return null;
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setValueState(null);
    } catch (error) {
      console.error("Error removing localStorage", error);
    }
  };

  return {value, setValue, getValue, remove };
}
