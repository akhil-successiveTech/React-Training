// Create a simple voting application using the useReducer hook. Set up a reducer to manage the votes for 
// different options. Create buttons representing voting options.

"use client"
import { useReducer } from "react";

const Home = () => {

    //Reducer functions
    const reducer1 = (state, action) => {
        return state+1;
    };
    const reducer2 = (state, action) => {
        return state+1;
    };

    // Used useReducer hook
    const[BJP, dispatchBJP] = useReducer(reducer1, 0);
    const[congress, dispatchCon] = useReducer(reducer2, 0);

    return(
        <>
            <p>BJP: {BJP}</p>
            <button onClick={() => {dispatchBJP({name: "BJP"})}}>Vote for BJP</button>
            <p>Congress: {congress}</p>
            <button onClick={() => {dispatchCon({type: "Increment"})}}>Vote for Congress</button>
        </>
    )
}

export default Home;