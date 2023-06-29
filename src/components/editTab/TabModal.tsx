import React, { useState } from "react"
import { getItem } from "../../index"
import { useLoaderData, Form, redirect, useLocation, Link } from "react-router-dom";
import { Todo } from "../../index"

const OpenModal = () => {
    const [text, setText] = useState<string>()
    const [error, setError] = useState<any>();
    const todo = useLoaderData();
    const [confirm, setConfirm] = useState(todo.completed)

    function handleClick(event) {
        console.log(event)
    }   

    function handleToggle(event){
        setConfirm(event.target.checked)
        console.log(event.target.checked)
        console.log(confirm)
    }

    return (
        <div className="absolute top-32">
            <dialog open={true} className=" bg-white shadow-xl shadow-gray-700 fixed top-100 left-50">
                <div className="w-[20vw] h-[30vh] p-4 bg-white text-black flex  flex-col justify-between items-start rounded-lg">
                    <h1 className="p-2 font-black text-xl">
                        Edit your todo
                    </h1>

                    <input type="text" name={todo.id} id={todo.id} defaultValue={todo.todo}
                        onChange={(e) => setText(e.target.value)}
                        className="bg-white border-2 border-black rounded-md w-[90%] h-[5vh] mb-5 p-2" />

                    <div className="w-[18vw] h-[5vh] items-center flex justify-between">
                        <div className="items-center h-[5vh] flex ">
                            <label className="relative inline-flex items-center cursor-pointer mb-4">
                                <input onChange={handleToggle} type="checkbox" className="sr-only peer" checked={confirm}/>
                                <div className="w-11 h-6 bg-red-600
                    peer-focus:outline-none  rounded-full peer dark:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                                <span className="ml-3 text-sm font-medium text-black">{confirm && "completed" || "uncompleted"}</span>
                            </label>

                        </div>
                        <Link to={{ pathname: "/" }}>
                            <button className="h-[5vh] w-[4vw] border-2 border-black rounded-lg p-2 hover:text-white hover:bg-black active:text-sm" onClick={handleClick}>done</button>
                        </Link>
                    </div>
                </div>
            </dialog>
        </div>
    );

}

export const loader = async ({ params }) => {
    try {
        console.log(params.id)
        const todo: Todo = await getItem(params.id)
        console.log(todo)
        return todo
    } catch (error) {
        console.error(error)
    }
}

export default OpenModal
