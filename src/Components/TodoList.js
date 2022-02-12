import React,{useContext} from 'react'
import TodoItem from './TodoItem';
import classes from "./TodoList.module.css"
import { TodoListContext } from './TodoListContext';
const TodoList = (props) => {
    const [list,setList] = useContext(TodoListContext)
    return (
        <ul className={classes.todolist}>
            {props.list.length !== 0 ? props.list.map((item)=>{
                return <TodoItem item={item} list={props.list} setList={setList} key={item.id} theme={props.theme}/>
            }):<TodoItem theme={props.theme} list={props.list}/>}
        </ul>
    )
}

export default TodoList

