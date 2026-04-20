import React, {useEffect} from 'react';
import{ useNavigate, useRoutes} from 'react-router-dom';

// page list
import Dashboard from "./components/dashboard/Dashbooard";
import Profile from "./components/user/Profile"
import SignUP from "./components/auth/SignUp";
import Login from "./components/auth/Login";


//Auth Context
import {useAuth} from "./authContext";

const ProjectRoutes = ()=>{
    const {currentUser, setCurrentUser} = useAuth();
   // useNavigate is a hook provided by react-router-dom that allows you to programmatically navigate to different routes in your application. It returns a function that can be called with a path to navigate to that path.
    const navigate = useNavigate();

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem("userId");
        if(userIdFromStorage && !currentUser){
           setCurrentUser(userIdFromStorage); 
        }

        if(!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname)){
           navigate("/auth");
        }
        if(userIdFromStorage && window.location.pathname == '/auth'){
            navigate("/");
        }
    },
         [currentUser, navigate, setCurrentUser]);
    let element = useRoutes ([
        {
            path:"/",
            element:<Dashboard/>
        },

        {
            path:"/auth",
            element:<Login/>
        },

        
        {
            path:"/signup",
            element:<SignUP/>
        },
        
        {
            path:"/profile",
            element:<Profile/>
        }
    ]);
    return element;
}
export default ProjectRoutes;
