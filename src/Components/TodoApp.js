import React,{useState,useContext,useEffect} from 'react'
import classes from "./TodoApp.module.css";
import Nav from './Nav';
import Input from './Input';
import TodoList from './TodoList';
import Actions from './Actions';
import { TodoListContext } from './TodoListContext';

const TodoApp = (props) => {
    const [filter, setFilter] = useState("all");
    const [list,setList] = useContext(TodoListContext);
    const [filteredList, setFilteredList] = useState(list);
    useEffect(() => {
        setFilteredList((prevList)=>{
            switch (filter) {
                case "all":
                    return list;
                case "completed":
                    return list.filter((item)=>{
                        return item.isDone
                    })
                case "active":
                    return list.filter((item)=>{
                        return !item.isDone
                    })
                default:
                    break;
            }
        });
    
      return () => {
        console.log("cleared")
      };
    }, [filter,list]);
    

    return (
        
            <div className={classes.todoapp}>
                <Nav theme={props.theme} changeTheme={props.changeTheme}/>
                <Input theme={props.theme}/>
                <TodoList theme={props.theme} list={filteredList}/>
                <Actions theme={props.theme}  setFilter={(filter)=>{
                    setFilter(filter)
                }}/>
            </div>
        
    )
}

export default TodoApp
