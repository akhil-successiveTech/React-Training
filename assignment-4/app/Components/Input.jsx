"use client"
import { useState } from "react";

const ControllerInput = () => {
    // Created a state to get input data
    const[data, setData] = useState("");

    return(
        <>
        <p>Controller Input: </p>
        {/* Taking input */}
        <input
        value={data}
        style={{border: "2px solid black"}}
        type="text"
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter your name..."
        ></input>
        <p>Hello, {data}</p>
        </>
    )
}

export default ControllerInput;