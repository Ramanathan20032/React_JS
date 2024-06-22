import React from "react";
import { useState } from "react";

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function sighInHandler(){
        // console.log('Email : ', email)
        // console.log('Password : ', password)
        setMessage('Loading...')
        if(email == 'ramanathan20032@gmail.com' && password == 'test@123'){
            setTimeout(() => {
                setMessage('Successfully LoggedIn!')
            }, 3000)
        }
        else{
            setTimeout(() => {
                setMessage('Ínvalid Credentials!')
            }, 3000);
        }
    }

    return(
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/><br />
            <input type="text" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/><p />
            <button onClick={sighInHandler}>Sign In</button>
            {message && <p>{message}</p>}
        </>
    )
}