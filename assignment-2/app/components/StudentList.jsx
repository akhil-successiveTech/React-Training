"use client";

import React, { useState, useMemo } from "react";

const StudentList = () => {
  const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);

  const addStudent = () => {
    const newName = `Student ${students.length + 1}`;
    setStudents((prev) => [...prev, newName]);
  };

  const memoizedStudentList = useMemo(() => {
    console.log("Generating student list...");
    return students.map((name, index) => (
      <li key={index}>{name}</li>
    ));
  }, [students]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Student List</h2>
      <ul>{memoizedStudentList}</ul>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
