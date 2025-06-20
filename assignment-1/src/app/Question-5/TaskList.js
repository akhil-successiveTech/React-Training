//Q5: Create a functional component named TaskList that accepts an array of task names as a prop

export default function TaskList({arr,name}){
    // Display the tasks with index in the array 
    return(
        <ul>
            {arr.map((item, index) => (
                <li>{item} at {index}th index</li>
            ))}
        </ul>
    )
}