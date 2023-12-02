import React from "react";
import "../css/formFields.css"

export const TextField = (props) => {
    return (
    <input className="textbox-formfield" 
    type={props.type} 
    placeholder={props.placeholder} 
    onChange={props.onChange} 
    value={props.value}/>
    ) ;
}

export const SubmitButton = (props) => {
    return (
    <button className="button-formfield" type={props.type} onClick={props.onClick}> {props.label}</button>
    ) ;
}