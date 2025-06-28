"use client"

import {useState} from 'react';

const TimeContext = createContext();

export const TimeProvider = ({children}) => {
    const[time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return() => clearInterval(interval);
    }, []);

    return(
        <TimeContext.Provider value={{time, updateTime}}></TimeContext.Provider>
    )
}