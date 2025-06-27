"use client"
import {createContext, useContext, useState} from 'react'
import { useRouter } from 'next/router'

const AuthenticationContext = createContext();

export function AuthenticationContext({children}){
    const router = useRouter();
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if(username === 'admin' && password === '1234'){
            setUser(username);
            router.push('/');
        }
        else{
            alert("Invalid credentials");
        }
    }

    const logout = () => {
        setUser(null);
        router.push('/login');
    };

    return(
        <AuthenticationContext.Provider value={{user, login, logout}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthenticationContext);
}