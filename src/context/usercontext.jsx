import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useContext, useEffect, useState } from "react";


const UserContext=createContext();

export const UserProvider = ({children})=>{

    const {isAuthenticated,loginWithRedirect,logout,user,isLoading}=useAuth0();

    const [myUser,setMyUser]=useState(null);
    useEffect(()=>{
        console.log('user',user);
        console.log('isAuthenticated',isAuthenticated);
        console.log('loginWithRedirect',loginWithRedirect);
        console.log('loading',isLoading);
    })
    return (
        <UserContext.Provider value={{loginWithRedirect,logout,myUser}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = ()=>{
    return useContext(UserContext);
}