"use client"
import { useEffect, useState } from "react"

const Notification = () => {
    let[message, setMessage] = useState("Message Received!")
    return(
        useEffect(() => {
            setInterval(() => {
                alert(message)
            }, 5000)
        })
    )
}

export default Notification;