// Q4: Function that is used to increment or decrement a counter using 2 buttons

'use client'
import { setConfig } from "next/config";
import { useState } from "react";
export default function Counter(){
    
    let [num,setCount] = useState(0);
    return (
        <>
            <p>Count: {num}</p>
            <button onClick={() => setCount(num+1)}>Increment</button>
            <button onClick={() => setCount(num-1)}>Decrement</button>
        </>
    )
}