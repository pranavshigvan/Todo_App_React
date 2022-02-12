import TodoApp from './Components/TodoApp';
import './App.css';
import { useState} from 'react';
import {ContextProvider } from './Components/TodoListContext';
import darkDesktopBg from "./Assets/bg-desktop-dark.jpg"
import darkMobileBg from "./Assets/bg-mobile-dark.jpg"
import lightDesktopBg from "./Assets/bg-desktop-light.jpg"
import lightMobileBg from "./Assets/bg-mobile-light.jpg"


function App() {
  const [theme, setTheme] = useState("dark")
  const [desktop, setDesktop] = useState(window.innerWidth > 500 ? true : false)
  window.onresize = ()=>{
    setDesktop((prev)=>{
      return window.innerWidth > 500 ? true : false
    })
  }
  const bgImage = {
    backgroundImage: `url(${theme === "light" ?(desktop?lightDesktopBg:lightMobileBg):(desktop?darkDesktopBg:darkMobileBg)})`,
    backgroundColor: `${theme === "light"?"aliceblue":"#181824"}`
  }
 
  const changeTheme = (theme)=>{
    setTheme((prevTheme)=>{
      return prevTheme === "light" ?"dark":"light"
    })
  }
  return (
    <ContextProvider >
      <div className="App" style={bgImage}>
        <TodoApp theme={theme} changeTheme={changeTheme}/>
      </div>
    </ContextProvider>
    
  );
}

export default App;