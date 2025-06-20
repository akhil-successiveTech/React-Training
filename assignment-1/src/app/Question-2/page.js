import UserCard from "./Usercard";

export default function Home(){
    const name = "Akhil";
    const email = "akhil.dhawan@successive.tech";
    const url = "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740";
    return(
        <>
            <UserCard name={name} email={email} avatarURL={url}/>
        </>
    )
}