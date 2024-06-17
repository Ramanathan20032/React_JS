import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    // it returns a function with the parameter of 'to' (path of the component)
    const navigate = useNavigate()

    function onSubmit(){
        // code for checking user credentials
        // if credentials is valid, Login Success
        navigate('/dashBoard')
        // 'to' (path of the component)
    }

    return(
        <>
            <h1>Login</h1>
            <button onClick={onSubmit}>Login</button>
        </>
    )
}