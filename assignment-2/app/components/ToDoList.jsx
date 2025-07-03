"use client"
import { useState } from "react"

const ToDoList = () => {
    // Created useStates to get task and store them
    let [task, setTask] = useState("")
    let [todos, setTodos] = useState([])

    // Function to add a task as object
    function add() {
        if (task.trim() === "") return;
        setTodos([...todos, { task, isCompleted: false }]);
        setTask("");
    }

    // Function to change the isCompleted status
    const toggleStatus = (index) => {
        todos[index] = { ...todos[index], isCompleted: !todos[index].isCompleted }
        // Passes a copy of todos array
        setTodos(JSON.parse(JSON.stringify(todos)));
    }

    // Function to delete task
    function deleteArr(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    console.log("todoList", todos);

    return (
        <>
            <form onSubmit={(e) => {
                // To prevent the default page re-rendering
                e.preventDefault();
            }}>
                <label>
                    Enter the task:
                </label>
                <input
                    style={{ border: "2px solid black", padding: "5px 5px" }}
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                >
                </input>
                <button style={{ border: "2px solid black", padding: "5px 5px" }} onClick={add}>Add</button>
            </form>
            <ul>
                Value is:
                {todos.map(({ task, isCompleted }, index) => (
                    <li key={index}>
                        {/* {value} */}
                        <div style={{
                            display: "flex",
                            border: "1px solid black",
                            width: "400px",
                            justifyContent: "space-between"
                        }}>
                            <span style={{ textDecorationLine: isCompleted === true ? "line-through" : "none"}}>{task}</span>
                            <div>
                                <input onChange={() => toggleStatus(index)} type="checkbox" name="" id="" />
                                <button style={{ border: "1px solid black", marginLeft: "10px" }} onClick={() => deleteArr(index)}>Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDoList;