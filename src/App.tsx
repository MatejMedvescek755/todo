import { Todo, getItems } from './index.ts'
import { useEffect, useState } from 'react'
import SingleTodoView from './components/SingleTodoView/index.tsx';
import { addItem } from './index.ts';
import { Todos } from "./index.ts";
import React from 'react';
import { deleteItem } from "./index.ts"
import { Link, useLocation, Outlet } from "react-router-dom"
import NavBar from './components/NavBar/NavBar.tsx';

function App() {
  const [todos, setTodos] = useState<Todos>()
  const [text, setText] = React.useState<string>("")
  const [error, setError] = React.useState<any>();

  const location = useLocation()

  async function handleClick() {
    try {
      const req = await addItem(text)
      const newObject = {
        todos: [req].concat(todos["todos"]),
        total: todos["total"],
        skip: todos["skip"],
        limit: todos["limit"]
      }
      setTodos(newObject)
      setText("")
    } catch (error) {
      console.error(error)
      setError(error) 
    }
  }

  const onDeleteHandler = async (id:number) => {
    try {
      const obj = await deleteItem(id)
      const list = todos["todos"].map((el)=>{
        if(el.id == id){
            return obj
        }else{
            return el
        }
      })
      const newTodo = {
        todos: list,
        total: todos["total"],
        skip: todos["skip"],
        limit: todos["limit"]
      }
    setTodos(newTodo) 
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  useEffect(() => {
    try {
      getItems().then((res) => {
        setTodos(res)
      })
    } catch (error) {
      console.error(error)
      setError(error)
    }

    return () => {
      setError(undefined);
    }

  }, [])

  if (error) return "Error...";
  return (
    <>
      <NavBar />
      <div id="main" className='flex flex-col items-center flex-wrap max-w-[100vw] min-h-[95vh]'>
        <div className='flex w-[55vw] h-[10vh] flex-row justify-center items-end'>
          <div className='flex flex-col mb-4 w-[50vw]'>
            <label htmlFor="add">add tasks</label>
            <input className='2xl:w-[50vw] xl:w-[49vw] lg:w-[48vw]
            sm:w-[45vw] w-[42vw]  rounded-sm p-2' type="text" name="add" id="add" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className='flex justify-center items-center w-[5vw] h-[10vh]'>
            <button className='mt-6 min-w-fit border-2 p-2 border-white rounded-md' onClick={handleClick}>confirm</button>
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-start justify-center content-center w-[55vw] flex-col'>
          {todos ? <div>{
            todos["todos"].map((todo:Todo) => {
            if (!todo.isDeleted) {
              return <Link to={{pathname:""+todo.id}} 
              state={{backgroundLocation: location }} >
                <SingleTodoView key={todo.id} todo={todo} onDeleteHandler={onDeleteHandler} ></SingleTodoView>
              </Link> 
            }
          })

          }</div> : <p>loading</p>}
        </div>
      </div>
    </>
  )
}

export default App
