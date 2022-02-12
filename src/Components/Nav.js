import React from 'react'
import sun from "../Assets/icon-sun.svg";
import moon from "../Assets/icon-moon.svg";
import classes from "./Nav.module.css"

const Nav = props => {
    const handleClick = ()=>{
        props.changeTheme(props.theme)
    }
    return (
        <div className={classes.nav}>
            <h1>T O D O</h1>
            <button onClick={handleClick}><img src={props.theme === "light"?moon:sun} alt="" /></button>
        </div>
    )
}

export default Nav
