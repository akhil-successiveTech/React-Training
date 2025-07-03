'use client';

import useTimer from '@/hooks/useTimer';

export default function TimerPage() {
  const { time, running, start, pause, reset } = useTimer(30); // 10 second timer

  return (
    <div style={{ padding: 30, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Countdown Timer</h1>
      <h2 style={{ fontSize: 48 }}>{time}s</h2>

      <div style={{ marginTop: 20 }}>
        <button onClick={start} disabled={running} style={{border: "2px solid black", marginRight: 10 }}>
          Start
        </button>
        <button onClick={pause} style={{border: "2px solid black", marginRight: 10 }}>
          Pause
        </button>
        <button style = {{border: "2px solid black"}} onClick={reset}>Reset</button>
      </div>

      <p style={{ marginTop: 20, color: 'gray' }}>
        {running ? 'Running...' : 'Stopped or finished.'}
      </p>
    </div>
  );
}