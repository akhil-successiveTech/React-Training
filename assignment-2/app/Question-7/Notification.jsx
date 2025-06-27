"use client"
import { useEffect, useState } from "react"

export default function Notification(){
    let[message, setMessage] = useState("Message Received!")

    return(
        useEffect(() => {
            setInterval(() => {
                alter(message)
            }, 5000)
        })
    )
}