import React, { useState } from "react"
import { getItem } from "../../index"
import { useLoaderData } from "react-router-dom";
import { Todo } from "../../index"

const EditTab = () => {
    const [confirm, setConfirm ] = useState()
    const [text, setText ] = useState<string>()
    const [error, setError] = useState<any>();

    const todo = useLoaderData();
    console.log(todo)
    function handleClick(event) {
        console.log(event)
    }


    function handleToggle(event){
        setConfirm(event.target.checked)
    }

    return (
        <div id="main" className="flex w-screen h-screen justify-center items-center">

            <div className="w-[30vw] h-[40vh] p-4 bg-white text-black flex  flex-col items-start rounded-lg">
                <h1 className="p-2 font-black text-xl">
                    Edit your todo
                </h1>

                <input type="text" name={todo.id} id={todo.id} defaultValue={todo.todo} 
                onChange={(e) => setText(e.target.value)}
                className="bg-white border-2 border-black rounded-md w-[80%] h-[5vh] mb-5 p-2" />
                <label className="relative inline-flex items-center cursor-pointer mb-4">
                    <input onChange={handleToggle} type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-red-600
                    peer-focus:outline-none  rounded-full peer dark:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                    <span className="ml-3 text-sm font-medium text-black">completed</span>
                </label>
                <button className="h-[5vh] w-[4vw] border-2 border-black rounded-lg p-2 hover:text-white hover:bg-black active:text-sm" onClick={handleClick}>delete</button>

            </div>
        </div>
    )
}

export const loader = async ({ params }) => {
    try {
        const todo: Todo = await getItem(params.id)
        console.log(todo)
        return todo   
    } catch (error) {
        console.error(error)
    }
}

export default EditTab
