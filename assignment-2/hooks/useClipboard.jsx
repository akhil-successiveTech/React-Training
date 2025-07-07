"use client";
import { useState, useCallback } from "react";

const useClipboard = (textToCopy) => {
  const [isCopied, setIsCopied] = useState(false);

  // Makes a text box
  const copy = useCallback(() => {
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    // Hides it from main screen
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    // Selects the text
    textarea.select();

    try {
      // Try to copy it using browser
      const success = document.execCommand("copy");
      setIsCopied(success);
    } catch (err) {
      setIsCopied(false);
    }

    // Delete the hidden text box
    document.body.removeChild(textarea);

    // Makes the setIsCopied false after every 2 seconds
    setTimeout(() => setIsCopied(false), 2000);
  }, [textToCopy]);

  return { isCopied, copy };
};

export default useClipboard;
