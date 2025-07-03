"use client";

import React, { useState, useMemo } from "react";

const StudentList = () => {
  const SAMPLE_LIST = useMemo(() => ["Alice", "Bob", "Charlie"]);
  const [students, setStudents] = useState(SAMPLE_LIST);

  const addStudent = () => {
    const newName = `Student ${students.length + 1}`;
    setStudents((prev) => [...prev, newName]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Student List</h2>
      <ul>{students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}</ul>
      <button style={{border: "2px solid black"}} onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
