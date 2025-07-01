"use client"
import { use, useState } from "react"

const ToDoList = () => {
    let [string, setString] = useState("")
    let [ToDos, setToDos] = useState([])

    function add () {
        if (string.trim() === "") return;
        setToDos([...ToDos, string]);
        setString("");
    }

    function deleteArr (index) {
        setToDos(ToDos.filter((_, i) => i !== index));
    }
    
    return(
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label>
                    Enter the task:
                </label>
                <input
                style={{border: "2px solid black", padding: "5px 5px"}}
                type="text"
                value={string}
                onChange={(e) => setString(e.target.value)}
                >
                </input>
                <button style={{border: "2px solid black", padding: "5px 5px"}} onClick={add}>Add</button>
            </form>
            <br/>
            <p>To Do List: {ToDos}</p>
            <br/>
            <ul>
                Value is: 
                {ToDos.map((value, index) => (
                    <li key={index}>
                        {/* {value} */}
                        <span>{value}</span>
                        <button style={{border: "5px 5px"}} onClick={() => deleteArr(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDoList;