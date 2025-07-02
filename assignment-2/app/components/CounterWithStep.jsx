"use client"

import { useState } from "react"

const CounterWithStep = () => {
    // Created useState for count and step value
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    // Functions to increment and decrement
    function addValue(){
        setCount(count+value);
    }

    function subValue(){
        setCount(count-value);
    }

    return(
        <>
        {/* Input the step value */}
        <input 
        type="number" 
        min="0" 
        value={value} 
        style={{padding: "5px 5px", border: "2px solid black"}}
        placeholder="Enter value:"
        onChange={(e) => setValue(Number(e.target.value))}
        ></input>
        <p>Count is: {count}</p>
        {/* Buttons to increment and decrement */}
        <button style={{padding: "5px 5px", border: "2px solid black"}} onClick={addValue}>Increment</button>
        <button style={{padding: "5px 5px", border: "2px solid black"}} onClick={subValue}>Decrement</button>
        </>
    )
}

export default CounterWithStep;