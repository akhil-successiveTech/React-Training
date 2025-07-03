// Create a simple voting application using the useReducer hook. Set up a reducer to manage the votes for 
// different options. Create buttons representing voting options.

"use client"
import { useReducer } from "react";

const Home = () => {

    // Reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case "INC":
                return ({ ...state, congress: state.congress + 1 })
                break;
            case "BJP":
                return ({ ...state, bjp: state.bjp + 1 })
                break;
            default:
                break;
        }
    };

    // Count the votes
    const counting = { bjp : 0, congress: 0 };
    const[state, dispatch] = useReducer(reducer, counting);

    return(
        <>
            <p>BJP: {state.bjp}</p>
            <button style={{border: "2px solid black"}} onClick={() => dispatch({type: "BJP"})}>Vote for BJP</button>
            <p>Congress: {state.congress}</p>
            <button style={{border: "2px solid black"}} onClick={() => dispatch({type: "INC"})}>Vote for Congress</button>
        </>
    )
}

export default Home;