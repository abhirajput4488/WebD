import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './component/Appname'
import Addtodo from './component/Addtodo'
import Todo1 from './component/Todo1'
import Todo2 from './component/Todo2'
import "./Bpp.css" 

function App() {
  return (
  <center className="todo-container">
    <Appname/>
    <Addtodo/>
    <div className='item-container'>
    <Todo1></Todo1>
    <Todo2></Todo2>
    </div>
  
  </center>
);
}
export default App
