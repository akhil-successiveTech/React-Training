// Create two components: Parent and Child. In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count. Use useCallback hook

"use client"
import { useCallback, useState } from "react";
import Child from "./Child";

// Parent component
const Parent = () => {
    // Count state
    const[count, setCount] = useState(0);

    // Function to increment the value
    const buttonClicked = useCallback(() => {
        setCount(count+1);
    }, [count])

    // Resets the value to 0
    const reset = () => (setCount(0));

    return(
        <>
            {/* <p>Count is: {value}</p> */}
            {/* <button onClick={buttonClicked}>Increment</button> */}
            <Child buttonClicked={buttonClicked} count={count} reset={reset}/>
        </>
    )

}

export default Parent;