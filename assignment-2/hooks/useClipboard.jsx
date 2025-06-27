"use client";
import { useState, useCallback } from "react";

const useClipboard = (textToCopy) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(() => {
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();

    try {
      const success = document.execCommand("copy");
      setIsCopied(success);
    } catch (err) {
      setIsCopied(false);
    }

    document.body.removeChild(textarea);

    setTimeout(() => setIsCopied(false), 2000);
  }, [textToCopy]);

  return { isCopied, copy };
};

export default useClipboard;
