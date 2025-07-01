"use client";

import React from "react";
import useTimer from "@/hooks/useTimer";

const CountdownTimer = () => {
  const { timeLeft, isRunning, start, pause, reset } = useTimer(30);

  return (
    <div style={{ padding: 20 }}>
      <h2>Countdown Timer</h2>
      <h1>{timeLeft}s</h1>
      <div>
        <button onClick={start} disabled={isRunning}>Start</button>
        <button onClick={pause} disabled={!isRunning} style={{ marginLeft: 10 }}>Pause</button>
        <button onClick={reset} style={{ marginLeft: 10 }}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
