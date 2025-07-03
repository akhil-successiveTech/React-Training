"use client"
import { useState } from "react";

const ConditionalComponent = () => {
  // Created useState to take input
  const [text, setText] = useState("");
  // Created to display message 
  const [message, setMessage] = useState("");

  // Function to check the text
  const handleClick = () => {
    const value = text.toLowerCase()
    if(value.trim() === "show"){
      setMessage("You typed show!");
    } 
  };

  return (
    <div>
      {/* Taking input */}
      <input
        type="text"
        value={text}
        style={{border: "2px solid black"}}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button style={{border: "2px solid black"}} onClick={handleClick}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default ConditionalComponent;