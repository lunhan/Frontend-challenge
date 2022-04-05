import React from "react";
import './NavBar.css';
import logo from '../../static/img/logo.svg'
import DropDown from '../DropDown/DropDown'

const NavBar = () => {
    const isTeacher = true
    return(
        <div className="navbar">
            <div className="logo"><img src={logo} /></div>
            {isTeacher?(
                <div className="nav-menu">
                    <div className="nav-classes">Classes</div>
                    <div className="nav-button">Lessons</div>
                    <div className="nav-button">Libraries</div>
                </div>
            ):(
                <div className="nav-menu">
                    <div className="nav-classes">Classes</div>
                    <div className="nav-button">Assignments</div>
                </div>
            )}

            <div className="user-bar">
                <DropDown/>
            </div>
            
            
        </div>
    )
}

export default NavBar;