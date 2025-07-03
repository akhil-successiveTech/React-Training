// Create a functional component called Notification. Use the useState hook to manage a state variable 
// named message initialized to an empty string. Use the useEffect hook to show a notification message 
// for 5 seconds whenever the message state changes.

import Notification from "../components/Notification";

export default function Home(){
    return(
        <Notification/>
    )
}