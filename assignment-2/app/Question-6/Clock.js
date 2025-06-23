"use client"
import { useEffect, useState } from "react"

export default function Clock(){

    let [current, setCurrent] = useState(new Date().toLocaleTimeString());

    return(
        <>
            <p>Current time: {current}</p>
        </>
    )
}