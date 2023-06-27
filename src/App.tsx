import { getItems } from './index.ts'
import { useEffect, useState } from 'react'
import Tab from './components/tab/index.tsx';
import { addItem } from './index.ts'


function App() {
  const [todoList, setTodoList] = useState<any>();
  let text = "";

  function handleChange(event){ 
    text=event.target.value
  }

  async function handleClick(){
    console.log(text)
    const req = await addItem(text)
    console.log(req)
    const newObject = {
      todos:[req].concat(todoList["todos"]),
      total:todoList["total"],
      skip:todoList["skip"],
      limit:todoList["limit"]
    }
    setTodoList(newObject)
    console.log(todoList)
    text="" 
  }

  useEffect(() => {
    setTodoList(null)
    getItems().then((res) => {
      setTodoList(res)
    })

  }, [])

  return (
    <>
      <div id="main" className='flex flex-col items-center flex-wrap max-w-[100vw] min-h-[100vh]'>
        <div className='flex w-70vw] flex-row justify-end items-end'>

          <div className='flex flex-col'>
            <label htmlFor="add">add tasks</label>
            <input className='w-[50vw]' type="text" name="add" id="add" onChange={handleChange} />
          </div>
          <button onClick={handleClick}>confirm</button>
        </div>
        <div className='flex flex-wrap items-start justify-center content-center w-[70vw] flex-col'>
          {todoList ? <>{todoList["todos"].map((element) => {
            return <Tab key={element.id} {...{ id: element.id, todo: element.todo, completed: element.completed, userId: element.userId }} ></Tab>
          })

          }</> : <p>not mounted</p>}
        </div>
      </div>
    </>
  )
}

export default App
