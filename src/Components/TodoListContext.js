import React,{useState} from "react";

export const TodoListContext = React.createContext();
// const todoList = [
//     {
//         title: "Lorem ipsum dolor sit amet.",
//         isDone:false,
//         id:"a1"
//     },
//     {
//         title: "heloo",
//         isDone:false,
//         id:"a2"
//     },
//     {
//         title: "mcsml,;s.",
//         isDone:false,
//         id:"a3"
//     },
//     {
//         title: "eolffw.",
//         isDone:false,
//         id:"a4"
//     },
//     {
//         title: "wokflldl.",
//         isDone:false,
//         id:"a5 "
//     }
// ]
export const ContextProvider = (props)=>{
    const todoList = JSON.parse(localStorage.getItem("list"))
    console.log(todoList)
    const [list, setList] = useState(todoList?[...todoList]:[])
    return (
        <TodoListContext.Provider  value={[list,setList]}>
            {props.children}
        </TodoListContext.Provider>
    )
}