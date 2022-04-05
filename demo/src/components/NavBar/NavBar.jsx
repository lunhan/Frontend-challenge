import React from "react";
import './NavBar.css';
import logo from '../../static/img/logo.svg'
import DropDown from '../DropDown/DropDown'

const NavBar = () => {
    const isTeacher = true
    const [visible, setVisible] = React.useState(false)
    const [user, setUser] = React.useState("teacher@school.org")
    const changVisible = () =>{
        setVisible(!visible)
    }
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
                <div className="nav-button" onClick={changVisible}>{user}</div>
                {
                    visible?(
                        <DropDown/>
                    ):(
                        <div/>
                    )
                }
            </div>
            
        </div>
    )
}

export default NavBar;