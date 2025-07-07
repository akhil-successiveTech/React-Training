"use client"
import { useEffect, useState } from "react"

const Clock = () => {

    // Created to store current time
    let [time, setTime] = useState(new Date().toLocaleTimeString());
    
    // useEffect hook to update time every second
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return() => {
            clearInterval(intervalID);
        }
    });

    return(
        <>
            <p>Current time: {time}</p>
        </>
    )
}

export default Clock;