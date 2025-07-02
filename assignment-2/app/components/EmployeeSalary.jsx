"use client";

import React, { useState, useMemo } from "react";

const data = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 55000 },
];

const EmployeeSalary = () => {
  // State to manage employees data
  const [employees, setEmployees] = useState(data);

  // Used useMemo for average salary calculation
  const averageSalary = useMemo(() => {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
    // Re-render only when employees change
  }, [employees]);

  // Function to update the salaries using Math.random 
  const updateSalaries = () => { 
    const updated = employees.map((emp) => ({
      ...emp,
      salary: emp.salary + Math.floor(Math.random() * 5000 + 1000),
    }));
    setEmployees(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Employee Salary Information</h2>
      <ul>
        {/* Displaying employees salary */}
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - ₹{emp.salary}
          </li>
        ))}
      </ul>
      <h3>Average Salary: ₹{averageSalary}</h3>
      {/* Button to update the salary */}
      <button style={{border: "2px solid black"}} onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;
