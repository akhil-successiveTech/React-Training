// Child component

export default function Child({count, buttonClicked, reset}){
    return(
        <>
        <p>This is the child component. Count: {count}</p>
        <button onClick={buttonClicked}>Increment</button>
        <button onClick={reset}>Reset it</button>
        </>
    )
}