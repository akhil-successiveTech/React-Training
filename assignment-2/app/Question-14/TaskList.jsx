"use client";

import React, { useState, useCallback } from "react";
import TaskItem from "./TaskItem";

const initialTasks = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build Todo App", completed: false },
  { id: 3, title: "Master Next.js", completed: false },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleComplete = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: true } : task
        )
      );
    },
    [setTasks]
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={useCallback(() => handleComplete(task.id), [handleComplete, task.id])}
        />
      ))}
    </div>
  );
};

export default TaskList;
