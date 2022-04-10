import React from "react";
import './NavBar.css';
import logo from '../../static/img/logo.svg'
import DropDown from '../DropDown/DropDown'
import up from '../../static/img/icon-arrow-up.svg'
import down from '../../static/img/icon-arrow.svg'

const NavBar = () => {
    const [isTeacher, setIsTeacher] = React.useState(true)
    const [visible, setVisible] = React.useState(false)
    const teacher = "teacher@school.org"
    const student = "student@school.org"
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
                <div className="user-button"  onClick={changVisible}>
                    <div className={visible? "user-text-visible":"user-text" }>{isTeacher? teacher:student}</div>
                    <div className="button-icon">
                        {
                            visible?(<img src={up}/>):(<img src={down}/>)
                        }
                    </div>
                </div>
                {
                    visible?(
                        <DropDown />
                    ):(
                        <div/>
                    )
                }
            </div>
            
        </div>
    )
}

export default NavBar;