import { getItems } from './index.ts'
import './App.css'
import { useEffect, useState } from 'react'
import Tab from './components/tab/index.tsx';
import { AddItem } from './index.ts'


function App() {
  const [todoList, setTodoList] = useState<any>();
  useEffect(() => {
    setTodoList(null)
    getItems().then((res) => {
      setTodoList(res)
    })
  }, [])

  return (
    <>
      <div id="main" className='flex flex-col'>
        <div>

        </div>
        <div>
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
