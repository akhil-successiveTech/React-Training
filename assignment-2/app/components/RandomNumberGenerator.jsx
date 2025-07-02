"use client"

import { useState } from "react"

const RandomNumberGenerator = () => {
    // Created for random number
    let [randomNumber, setrandomNumber] = useState(0);

    // Always sets a new value
    function newNum() {
        // Up to 2 decimal places
        randomNumber = setrandomNumber((Math.random() * 100).toFixed(2));
    }

    return(
        <>
        {/* Displays the number */}
         <p>Random number: {randomNumber}</p>
         <button style={{padding: "5px 5px", border: "2px solid black"}} onClick={newNum}>Generate</button>
        </>
    )
}

export default RandomNumberGenerator;