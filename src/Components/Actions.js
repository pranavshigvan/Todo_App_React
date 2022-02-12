import React,{useContext} from 'react'
import classes from "./Actions.module.css";
import { TodoListContext } from './TodoListContext';
import Filter from './Filter';

const Actions = (props) => {
    const [list,setList] = useContext(TodoListContext)
    const itemStyle = {
        backgroundColor: `${props.theme === "light"?"#ffffff":"#25273c"}`,
        color:`${props.theme === "light"?"#25273c":"#ffffff"}`,
    }
    const clearCompleted = ()=>{
        setList((prevList)=>{
            return prevList.filter((item)=>{
                return !item.isDone
            })
        })
    }
    return (
        <div className={classes.action} style={itemStyle}>
            <p>{list.length} items left</p>
            <Filter theme={props.theme} style={itemStyle} setFilter={(filter)=>{
                props.setFilter(filter)
            }}/>
            <button style={itemStyle} onClick={clearCompleted}>clear completed</button>
        </div>
    )
}

export default Actions
