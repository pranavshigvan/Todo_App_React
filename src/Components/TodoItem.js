import React ,{useState,useContext} from 'react'
import classes from  "./TodoItem.module.css"
import { TodoListContext } from './TodoListContext';
const TodoItem = (props) => {
    const [list,setList] = useContext(TodoListContext)
    const [item, setItem] = useState(props.item)
    const itemStyle = {
        backgroundColor: `${props.theme === "light"?"#ffffff":"#25273c"}`,
        color:`${props.theme === "light"?"#25273c":"#ffffff"}`,
    }
    const btnStyle = {
        color:`${props.theme === "light"?"#25273c":"#ffffff"}`
    } 
    const handleRadioToggle = (e)=>{
        
        setList(prevList => {
            const newList = prevList.map((listItem,index) =>{
                if (listItem.id === item.id) {
                    listItem.isDone?e.target.checked = false:e.target.checked = true
                    const newItem = {title:listItem.title,isDone:!listItem.isDone,id:listItem.id}
                    console.log(newItem)
                    return newItem
                }
                return listItem
            })
            return newList
        })
    }
    const handleDelete = (e)=>{
        setList(prevList => {
            const newArr = prevList.filter((listItem)=>{
                return listItem.id !== item.id
            })
            localStorage.setItem("list",JSON.stringify(newArr))
            return newArr
        })
    }
    return (
        <>
        {
            props.list.length !== 0 ? 
            <li className={classes.todoitem} style={itemStyle}>
                <div className={classes.radio}>
                    <input type="radio" name="" id=""  onClick={handleRadioToggle} defaultChecked={item.isDone}/>
                    <span>{item.title}</span>
                </div>
                <button onClick={handleDelete} style={btnStyle}>X</button>
            </li>:
            <div className={classes.todoitem} style={itemStyle}>Please add todo</div>
        }
        </>
    )
}

export default TodoItem
