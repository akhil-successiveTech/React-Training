"use client"

import { useState } from "react"

export default function Random(){
    let [num, setNum] = useState(0);

    function newNum() {
        num = setNum(Math.random() * 100);
    }

    return(
        <>
         <p>Random number: {num}</p>
         <button style={{padding: "5px 5px", border: "2px solid black"}} onClick={newNum}>Generate</button>
        </>
    )
}