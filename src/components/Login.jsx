import React from "react";
import {  Link } from "react-router-dom";
import "../css/login.css"

import {TextField, SubmitButton} from "./FormFields";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        
    }

    return (
        <div className="container">
            <div className="login-header">
            <img src="https://leetcode.com/static/webpack_bundles/images/logo.c36eaf5e6.svg"></img>
            {/* <p>LeetCode</p> */}
            </div>
                <TextField type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}></TextField>
                <TextField type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}></TextField>
                <SubmitButton type="submit" label="Sign Up"></SubmitButton>
            <div className="sigup-footer">
                <p>Don't have an account?</p>
                
                <Link to="/signup">
                <button className="signup-button" >Sign Up</button> 
                </Link>
            </div>
            </div>
    ) ;
}

export default Login;