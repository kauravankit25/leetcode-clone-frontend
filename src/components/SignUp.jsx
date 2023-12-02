import React from "react";
import {  Link } from "react-router-dom";
import "../css/login.css"

import {TextField, SubmitButton} from "./FormFields";

const SignUp = () => {
    return (
        <div className="flex-container">
        <div className="container">
            <div className="login-header">
            <img src="https://leetcode.com/static/webpack_bundles/images/logo.c36eaf5e6.svg"></img>
            {/* <p>LeetCode</p> */}
            </div>
                <TextField type="email" placeholder="Name"></TextField>
                <TextField type="email" placeholder="Email"></TextField>
                <TextField type="password" placeholder="Password"></TextField>
                <TextField type="password" placeholder="Confirm Password"></TextField>
                <SubmitButton type="submit" label="Sign Up"></SubmitButton>
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