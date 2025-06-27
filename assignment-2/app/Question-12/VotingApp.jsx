// /components/VotingApp.js
"use client"; // required in Next.js App Router

import { useReducer } from "react";

// Initial state
const initialVotes = {
  BJP: 0,
  Congress: 0
};

// Reducer function
function voteReducer(state, action) {
  switch (action.type) {
    case "VOTE":
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
}

const VotingApp = () => {
  const [votes, dispatch] = useReducer(voteReducer, initialVotes);

  const voteOptions = Object.keys(votes);

  return (
    <div style={{ padding: 20 }}>
      {voteOptions.map((option) => (
        <div key={option} style={{ marginBottom: 10 }}>
          <button onClick={() => dispatch({ type: "VOTE", option })}>
            Vote for {option}
          </button>{" "}
          - Votes: {votes[option]}
        </div>
      ))}
    </div>
  );
};

export default VotingApp;
