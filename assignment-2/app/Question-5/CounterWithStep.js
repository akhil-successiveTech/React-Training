"use client"

import { useState } from "react"

export default function CounterWithStep(value){
    const [count, setCount] = useState(0);

    function addValue(){
        setCount(count+value.value);
    }

    function subValue(){
        setCount(count-value.value);
    }

    return(
        <>
        <p>Count is: {count}</p>
        <button style={{padding: "5px 5px"}} onClick={addValue}>Increment</button>
        <button onClick={subValue}>Decrement</button>
        </>
    )
}