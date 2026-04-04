
//it will be used to manage the authentication state of the user across the application.
// It will provide functions for logging in, logging out, and checking if the user is authenticated.
import  React, {createContext, useState, useEffect, useContext } from 'react';

const AuthContext =  createContext(); //constructor which creates a new context object. This object will be used to share authentication-related data and functions across the component tree.

//AuthProvider component will wrap the entire application and provide the authentication context to all child components.
export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider =  ({children}) => {
    const [currentUser, setCurrentUser] = useState(null); //state variable to hold the current user's information. Initially set to null, indicating that no user is logged in.
    useEffect(() =>{
       
        const userId = localStorage.getItem('userId'); //check if there is a user ID stored in the browser's local storage. This is a common way to persist user authentication across page reloads.
    if(userId){
        setCurrentUser(userId);//If a user ID is found in local storage, it updates the currentUser state with that ID, effectively logging the user in when the application loads.
    }
    
},
[]);

const value = {
    currentUser, setCurrentUser
}

return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider> //The AuthProvider component returns a context provider (AuthContext.Provider) that wraps its children. The value prop of the provider is set to an object containing the currentUser and setCurrentUser, making these values accessible to any component that consumes this context.
}