'use client'
const DisplayData = ({data}) =>{
    return (
        <div>
            {/* Function to display data */}
            {data.map((user) => {
                return <p key={user.id}>{user.name}</p>
            })}
        </div>
    );
}
export default DisplayData;