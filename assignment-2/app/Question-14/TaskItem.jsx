"use client";

import React from "react";

const TaskItem = React.memo(({ task, onComplete }) => {
  console.log(`Rendering: ${task.title}`);

  return (
    <div
      style={{
        marginBottom: 10,
        padding: 10,
        border: "1px solid #ccc",
        backgroundColor: task.completed ? "#e0ffe0" : "#fff",
      }}
    >
      <span>
        {task.title} {task.completed && "✅"}
      </span>
      {!task.completed && (
        <button
          onClick={onComplete}
          style={{ marginLeft: 10 }}
        >
          Complete
        </button>
      )}
    </div>
  );
});

export default TaskItem;
