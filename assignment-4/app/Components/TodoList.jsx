"use client";
import { useState } from "react";

const TodoList = () => {
  // State to take task
  const [task, setTask] = useState("");
  // State to add tasks into an array
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const handleAdd = () => {
    if (task.trim() === "") return;

    setTasks((prev) => [...prev, task]);
    setTask(""); // clear input of task after adding
  };

  // Function to delete a task
  const handleDelete = (index) => {
    setTasks((prev) => (
      prev.filter((_, i) => i !== index)
    ));
  };

  return (
    <div>
      <h2>Todo-List</h2>
      <input
        type="text"
        value={task}
        style={{border: "2px solid black"}}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button style={{border: "2px solid black"}} onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-between",
            }}>
            {t}
            <button onClick={() => (handleDelete(index))} style={{border: "2px solid black"}}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default TodoList;