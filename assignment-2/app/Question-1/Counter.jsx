"use client"
import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0);

    return(
        <>
            <p>Count is: {count}</p>
            <button style={{padding: "5px 5px"}} onClick={() => {setCount(count+1)}}>Increment</button>
            <button style={{padding: "5px 5px"}} onClick={() => {setCount(count-1)}}>Decrement</button>
        </>
    )
}