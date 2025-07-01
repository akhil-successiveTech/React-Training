"use client";

import React from "react";
import useClipboard from "@/hooks/useClipboard";

const CopyText = () => {
  const text = "This is the text to copy!";
  const { isCopied, copy } = useClipboard(text);

  return (
    <div style={{ padding: 20 }}>
      <h2>Copy to Clipboard Example</h2>
      <p>{text}</p>
      <button onClick={copy}>
        {isCopied ? "Copied!" : "Copy Text"}
      </button>
    </div>
  );
};

export default CopyText;
