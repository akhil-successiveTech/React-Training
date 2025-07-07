"use client";

import { useState, useEffect } from "react";
const Slideshow = () => {

  // Created to handle time and count of images
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(2);
  // Created to add pause play button
  const [pause, setPause] = useState(false);
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

  console.log("pause", pause);
  
  // If pause is false, then it will increment the count
  useEffect(() => {
    const interval = setInterval(() => {
        if (!pause) {
          setCount((prevCount) => (prevCount + 1) % arr.length);
        }
      }, time * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [pause, time]);

  return (
    <>
      <img
        src={arr[count]}
        alt="Image of Clock"
        style={{ padding: "10px", width: "300px", height: "auto" }}
      />
      <div>
        <label>Enter time (in seconds): </label>
        <input
          id="timeInput"
          type="number"
          min="1"
          value={time}
          style={{border: "2px solid black"}}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>
      {/* Button to play and pause and move to next image */}
      <button onClick={() => setPause(!pause)} style={{ border: "1px solid black", margin: 1 }} >{pause === true ? "Play" : "Pause"}</button>
      <button style={{ border: "1px solid black", margin: 1 }} onClick={() => setCount((count + 1) % arr.length)}>
        Next Image
      </button>
    </>
  );
};

export default Slideshow;
