"use client"
import { useEffect, useState } from "react"

export default function Clock(){

    let [current, setCurrent] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrent(new Date().toLocaleTimeString())
        }, 1000)
        return() => {
            clearInterval(intervalID);
        }
    });

    return(
        <>
            <p>Current time: {current}</p>
        </>
    )
}