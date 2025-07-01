"use client"
import { useState } from "react";

const Counter = () => {

    const[count, setCount] = useState(0);

    return(
        <>
            <p>Count is: {count}</p>
            <button style={{padding: "5px 5px"}} onClick={() => {setCount(count+1)}}>Increment</button>
            <button style={{padding: "5px 5px"}} onClick={() => {setCount(count-1)}}>Decrement</button>
        </>
    )
}

export default Counter;