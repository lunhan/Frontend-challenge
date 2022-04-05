import React from "react";
import './DropDown.css';

const DropDown = () => {
    const [user, setUser] = React.useState("student@school.org")
    return(
        <div className="dropdown">
            <div className="dropdown-button"><a>{user}</a></div>
            <div className="divider"/>
            <div className="dropdown-button"><a>Settings</a></div>
            <div className="dropdown-button"><a>Sign Out</a></div>
        </div>
    )}

export default DropDown;