"use client"
import { useState } from "react";

const Counter = () => {

    // Created a useState for count
    const[count, setCount] = useState(0);

    return(
        <>
            <p>Count is: {count}</p>
            {/* Increment */}
            <button style={{padding: "5px 5px", border: "2px solid black"}} onClick={() => {setCount(count+1)}}>Increment</button>
            {/* Decrement */}
            <button style={{padding: "5px 5px", border: "2px solid black"}} onClick={() => {setCount(count-1)}}>Decrement</button>
        </>
    )
}

export default Counter;