//Q5: Create a functional component named TaskList that accepts an array of task names as a prop

export default function TaskList({arr}) {
  // Display the tasks with index in the array
  return (
    <>
      <ul>
        {arr.map((task, index) => (
          <li key={index}>Task is: {task}</li>
        ))}
      </ul>
      {/* <p>{arr.toString()}</p> */}
    </>
  );
}
