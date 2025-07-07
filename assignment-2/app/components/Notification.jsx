"use client"
import { useEffect, useState } from "react"

const Notification = () => {
    // Created to store and display message
    const [message, setMessage] = useState("");
    const [clearMessage, setClearMessage] = useState(false);

    // First displays the message 
    useEffect(() => {
        setMessage("New Message Received!");
        setClearMessage(true);
    }, [])

    // Clear the message after 5 seconds
    useEffect(() => {
        setTimeout(() => {
            setMessage("")
        }, 5000)
    }, [clearMessage])

    return(
        <div>{message}</div>
    )
}

export default Notification;