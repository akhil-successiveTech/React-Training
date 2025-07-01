"use client";

import { useState, useEffect } from "react";

const Slideshow = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(2);
  const arr = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
  ];

  useEffect(() => { // Need to see
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % arr.length);
    }, time * 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <img
        src={arr[count]}
        alt="Image of Clock"
        style={{ padding: "10px", width: "300px", height: "auto" }}
      />
      <div>
        <label htmlFor="timeInput">Enter time (in seconds): </label>
        <input
          id="timeInput"
          type="number"
          min="1"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      <button onClick={() => setCount((count + 1) % arr.length)}>
        Next Image
      </button>
    </>
  );
};

export default Slideshow;
