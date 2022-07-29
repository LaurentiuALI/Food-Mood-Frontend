import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const user = localStorage.getItem("user");
    const session = sessionStorage.getItem("user");
    if(user || session){
        return children;
    }
    if(!user){
       return <Navigate to="/" />;
    }
}

export default ProtectedRoute