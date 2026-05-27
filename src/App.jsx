

import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
const App = () => {
  const [todoList,setTodoList]=useState([
    // {id:1,name:"Learning React"},
    // {id:2,name:"Watching Youtube"}
  ])

  const addNewTodo = (name) =>{
    const newTodo = {
      id:randomInFromInterval(1,1000000),
      name:name
    }
      setTodoList([...todoList,newTodo])
  }

  const randomInFromInterval = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

   const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)
    }

  return (
    <>
    <Header/>
   
    <Outlet/>
    <Footer/>
    </>

  )
}

export default App;
