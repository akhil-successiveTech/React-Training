// Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.

import EmployeeSalary from "./EmployeeSalary";

export default function Home() {
  return (
    <div>
      <EmployeeSalary />
    </div>
  );
}
