"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const useTimer = (initialDuration = 60) => {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const pause = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, []);

  const reset = useCallback(() => {
    pause();
    setTimeLeft(initialDuration);
  }, [pause, initialDuration]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { timeLeft, isRunning, start, pause, reset };
};

export default useTimer;
