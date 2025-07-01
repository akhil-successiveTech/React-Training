"use client"
import { useState } from "react";

const ControllerInput = () => {
    const[data, setData] = useState("");

    return(
        <>
        <p>Controller Input: </p>
        <p>Enter your name: </p>
        <input
        value={data}
        type="text"
        onChange={(e) => setData(e.target.value)}
        ></input>
        <p>Hello, {data}</p>
        </>
    )
}

export default ControllerInput;