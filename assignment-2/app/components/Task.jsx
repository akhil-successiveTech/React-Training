// Create a component that displays a list of tasks. Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed. Use useCallback hook

"use client";
import { useCallback, useState } from "react";

const Home = () => {
  // Array of tasks
  const [Tasks, setTasks] = useState([
    { id: 1, task: "Eating", status: "Complete" },
    { id: 2, task: "Drinking", status: "Complete" },
    { id: 3, task: "Sleeping", status: "Complete" },
  ]);

  // Toggle the tasks complete and incomplete using useCallback
  const ToggleTasks = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "Complete" ? "Incomplete" : "Complete" }: task
      )
    );
  });

  return (
    // Iterates from each element
    <>
      {Tasks.map((tasks) => (
        <div key={tasks.id} style={{display: "flex", width: "300px", justifyContent: "space-evenly"}}>
          <p
            style={{
              textDecoration: tasks.status === "Incomplete" ? "line-through" : "none",
            }}>
            {tasks.task}
          </p>
          <button style = {{border: "2px solid black"}} onClick={() => ToggleTasks(tasks.id)}>
          <p>Press here to {tasks.status}</p>
          </button>
          <div>
            
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;