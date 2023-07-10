import { Todo, getItems } from '../../index.ts'
import { useEffect, useState } from 'react'
import SingleTodoView from '../TodoRow/index.tsx';
import { addItem } from '../../index.ts';
import { Todos } from "../../index.ts";
import React from 'react';
import { deleteItem } from "../../index.ts"
import Modal from '../Modal/index.ts';
import EmptyInputModal from '../EmptyInputModal/EmptyInputModal.tsx';
import Plus from '../../assets/Plus.tsx';


function App() {
  const [todos, setTodos] = useState<Todos>()
  const [text, setText] = React.useState<string>("")
  const [error, setError] = React.useState<any>();
  const [confirmModal, setConfirmModal] = React.useState<boolean>(false)
  const [showAdd, setShowAdd] = React.useState<boolean>(false)

  async function handleKey(event) {
    console.log(event.key)
    if(event.key !== "Enter") return
    if ( text !== "") {
      try {
        const req = await addItem(text)
        if (!todos) return
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
    } else {
      setConfirmModal(true)
    }
  }

  const onDeleteHandler = async (id: number) => {
    try {
      const obj = await deleteItem(id)
      if (!todos) return
      const list = todos["todos"].map((el) => {
        if (el.id == id) {
          return obj
        } else {
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
      <div id="main" className='flex flex-col items-center flex-wrap max-w-[100vw] min-h-[95vh]'>
        <Modal isOpen={confirmModal}>
          <EmptyInputModal setState={setConfirmModal}></EmptyInputModal>
        </Modal>
        <div className='flex w-[55vw] h-[10vh]'>
          <div className="fixed bottom-40 right-60 bg-emerald-500 rounded-full w-[50px] h-[50px] flex items-center justify-center hover:cursor-pointer hover:bg-emerald-400"
            onClick={() => { setShowAdd(true) }}>
            <Plus />
          </div>
          {showAdd && <div className='flex flex-col w-[50vw]'>
            <input className='2xl:w-[55vw] xl:w-[49vw] h-[10vh] lg:w-[48vw]
            sm:w-[45vw] w-[42vw] bg-[#242424] outline-none text-lg  rounded-sm p-2' autoFocus type="text" name="add" id="add" placeholder='text for your todo, Press enter to submit' value={text} onChange={(e) => setText(e.target.value)} autoComplete='off' onKeyDown={handleKey} />
          </div>
          }
        </div>
        <div className='flex flex-wrap justify-center items-start justify-center content-center w-[55vw] flex-col'>
          {todos ? <div>{
            todos["todos"].map((todo: Todo) => {
              if (!todo.isDeleted) {
                return (

                  <SingleTodoView key={todo.id} todo={todo} onDeleteHandler={onDeleteHandler} />

                )
              }
            })
          }</div> : <p>loading</p>}
        </div>
      </div>
    </>
  )
}

export default App
