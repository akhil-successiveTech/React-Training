"use client";

import React, { useState, useMemo } from "react";

const initialEmployees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 55000 },
];

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const averageSalary = useMemo(() => {
    console.log("Calculating average salary...");
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
  }, [employees]);

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
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - ₹{emp.salary}
          </li>
        ))}
      </ul>
      <h3>Average Salary: ₹{averageSalary}</h3>
      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;
