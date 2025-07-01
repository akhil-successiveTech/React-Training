"use client"
import { useState } from "react";

function Message() {
  return <p>You typed "show"!</p>;
}

const ConditionalComponent = () => {
  const [text, setText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(text.toLowerCase() === "show");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Submit</button>

      {showMessage && <Message />}
    </div>
  );
}

export default ConditionalComponent;