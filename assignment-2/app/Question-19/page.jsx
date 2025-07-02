// Build a custom hook named useTimer for creating countdown timers. Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals. Use useTimer hook to display and control counter

import TimerPage from "../components/TimerPage";

export default function Home() {
  return (
    <div>
      <TimerPage/>
    </div>
  );
}
