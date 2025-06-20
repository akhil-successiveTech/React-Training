// Used to display the user details such as name, email, avatarURL

"use client"
import { useState } from "react"

export default function UserCard({name, email, avatarURL}){
    return(
        <>
            <p>Name is: {name}</p>
            <p>Email is: {email}</p>
            <img src={avatarURL} alt="Description of an Image" width={160} height={200}/>
        </>
    )
}