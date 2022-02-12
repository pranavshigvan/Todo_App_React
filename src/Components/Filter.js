import React from 'react'
import classes from "./Filter.module.css"
const Filter = (props) => {
    const itemStyle = {
        backgroundColor: `${props.theme === "light"?"#ffffff":"#25273c"}`,
        color:`${props.theme === "light"?"#25273c":"#ffffff"}`,
    }
    return (
        <div className={classes.filter} style={itemStyle}>
            <button style={itemStyle} onClick={(e)=>{
                props.setFilter("all")
            }}>All</button>
            <button style={itemStyle} onClick={(e)=>{
                props.setFilter("completed")
            }}>Completed</button>
            <button style={itemStyle} onClick={(e)=>{
                props.setFilter("active")
            }}>Active</button>
        </div>
    )
}

export default Filter
