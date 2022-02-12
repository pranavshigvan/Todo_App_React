import React,{useContext,useState} from 'react'
import classes from "./Input.module.css"
import { TodoListContext } from './TodoListContext'



const Input = (props) => {
    const [list,setList] = useContext(TodoListContext)
    const [input, setInput] = useState("")
    const styles = {
        backgroundColor: `${props.theme === "light"?"#ffffff":"#25273c"}`,
        color:`${props.theme === "light"?"#25273c":"#ffffff"}`
    }
    const inputStyle = {
        color:`${props.theme === "light"?"#25273c":"#ffffff"}`
    }
    const btnStyles = {
        backgroundColor: `${props.theme === "light"?"#a7a7b8":"#ffffff"}`,
        color:`${props.theme === "light"?"#ffffff":"#a7a7b8"}`
    }
    const addItem = (e)=>{
        if (input !== "") {
            const item = {
                title:input,
                isDone:false,
                id:Math.random().toString(36).slice(2)
            }
            setList(prevList =>{
                prevList.push(item)
                const newList = [...prevList]
                localStorage.setItem("list",JSON.stringify(newList))
                return newList
            })
            setInput("")
        }
        
    }
    
    return (
        <div className={classes.input} style={styles} >
            <input type="text" style={inputStyle} value={input} onChange={(e)=>{
                setInput(e.target.value)
            }} onKeyPress={(e)=>{
                if(e.key === "Enter"){
                    addItem()
                }
            }}/>
            <button style={btnStyles} type='button' onClick={addItem}>+</button>
        </div>
    )
}

export default Input
