import { getItems } from './index.ts'
import { useEffect, useState } from 'react'
import Tab from './components/tab/index.tsx';
import { addItem } from './index.ts'


function App() {
  const [todoList, setTodoList] = useState<any>();
  const [deletedList, setDeletedList] = useState([]);
  let text = "";

  function handleChange(event){ 
    text=event.target.value
  }

  async function handleClick(){
    const req = await addItem(text)
    const newObject = {
      todos:[req].concat(todoList["todos"]),
      total:todoList["total"],
      skip:todoList["skip"],
      limit:todoList["limit"]
    }
    setTodoList(newObject)
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
        <div className='flex w-[55vw] h-[10vh] flex-row justify-center items-end'>
          <div className='flex flex-col mb-4 w-[50vw]'>
            <label htmlFor="add">add tasks</label>
            <input className='2xl:w-[50vw] xl:w-[49vw] lg:w-[48vw]
            sm:w-[45vw] w-[42vw]  rounded-sm p-2' type="text" name="add" id="add" onChange={handleChange} />
          </div>
          <div className='flex justify-center items-center w-[5vw] h-[10vh]'>
            <button className='mt-6 min-w-fit border-2 p-2 border-white rounded-md' onClick={handleClick}>confirm</button>
          </div>
        </div>
        <div>
          { deletedList}
        </div>
        <div className='flex flex-wrap justify-center items-start justify-center content-center w-[55vw] flex-col'>
          {todoList ? <div>{ todoList["todos"].map((element) => {
            if(!deletedList.includes(element.id)){
              return <Tab key={element.id} {...{ id: element.id, todo: element.todo, completed: element.completed, userId: element.userId, setDeletedList:setDeletedList, deletedList:deletedList }} ></Tab>
            }
          })

          }</div> : <p>not mounted</p>}
        </div>
      </div>
    </>
  )
}

export default App
