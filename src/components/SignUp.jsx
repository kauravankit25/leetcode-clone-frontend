import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import "../css/login.css"
import { signUpApiCall } from "../utils/ApiCall";

import {TextField, SubmitButton} from "./FormFields";

const SignUp = () => {
    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = async () => {
        let response = await signUpApiCall({
            email,
            password
        });

        console.log(response)
        if (response.status == 200 || response.status == 201) {
            window.alert(response.data)
            navigate("/")
        } else {
            window.alert("Error!!!")
        }
    }
    return (
        <div className="flex-container">
        <div className="container">
            <div className="login-header">
            <img src="https://leetcode.com/static/webpack_bundles/images/logo.c36eaf5e6.svg"></img>
            {/* <p>LeetCode</p> */}
            </div>
                <TextField type="email" placeholder="Name"></TextField>
                <TextField type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}></TextField>
                <TextField type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}></TextField>
                <SubmitButton type="submit" label="Sign Up" onClick={handleSubmit}></SubmitButton>
            <div className="sigup-footer">
                <p>Already have an account?</p>
                
                <Link to="/">
                <button className="signup-button">Log In</button>
                </Link>
            </div>
            </div>
            </div>
    ) ;
}

export default SignUp;