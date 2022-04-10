import React from "react";
import './DropDown.css';

const DropDown = (props) => {
    const isTeacher= true
    const teacher = "teacher@school.org"
    const student = "student@school.org"

    const changeUser = () => {
        // setIsTeacher(!isTeacher)
    }

    return(
        <div className="dropdown">
            <div className="dropdown-button" onClick={changeUser()}><a>{isTeacher?student:teacher}</a></div>
            <div className="divider"/>
            <div className="dropdown-button"><a>Settings</a></div>
            <div className="dropdown-button"><a>Sign Out</a></div>
        </div>
    )}

export default DropDown;