"use client"

import { useState } from "react"

const CounterWithStep = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    function addValue(){
        setCount(count+value);
    }

    function subValue(){
        setCount(count-value);
    }

    return(
        <>
        <input 
        type="number" 
        min="0" 
        value={value} 
        placeholder="Enter value:"
        onChange={(e) => setValue(Number(e.target.value))}
        ></input>
        <p>Count is: {count}</p>
        <button style={{padding: "5px 5px"}} onClick={addValue}>Increment</button>
        <button onClick={subValue}>Decrement</button>
        </>
    )
}

export default CounterWithStep;