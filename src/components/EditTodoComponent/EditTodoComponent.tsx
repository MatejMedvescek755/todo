import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Todo } from "../../index";
import { getItem } from "../../index";
import { EditTodoProps } from ".";

const loader = async (id: number) => {
    try {
        const todo: Todo = await getItem(id)
        return todo
    } catch (error) {
        console.error(error)
    }
}

const EditTodoComponent = ({ setState }: EditTodoProps) => {
    const [error, setError] = React.useState<any>();
    const [confirm, setConfirm] = useState<boolean | undefined>(false)
    const [text, setText] = useState<string>()
    const { id } = useParams()
    const [todo, setTodo] = useState<Todo>()

    function handleClick(event: React.MouseEvent) {
        setState(false)
    }

    function handleToggle() {
        setConfirm(!confirm)
    }

    useEffect(() => {
        try {
            loader(parseInt(id)).then((res) => {
                setTodo(res);
                setConfirm(res.completed)
            })
        } catch (error) {
            console.error(error)
            setError(error)
        }

        return () => {
            setError(undefined)
        }
    }, [id])

    if (error) {
        return (error)
    }
    return (
        <div className="w-[20vw] h-[30vh] p-4 bg-white text-black flex  flex-col justify-between items-start rounded-lg">
            <h1 className="p-2 font-black text-xl">
                Edit your todo
            </h1>
            {
                todo ?
                    <div className="flex flex-col justify-between h-[25vh]">
                        <input type="text" name={todo.id + ""} id={todo.id + ""} defaultValue={todo.todo}
                            onChange={(e) => setText(e.target.value)}
                            className="bg-white border-2 border-black rounded-md w-[90%] h-[5vh] mb-5 p-2" />
                        <div className="w-[18vw] h-[5vh] items-center flex justify-between">
                            <div className="items-center h-[5vh] flex ">
                                <label className="relative inline-flex items-center cursor-pointer mb-4">
                                    {confirm && <input onChange={handleToggle} type="checkbox" className="sr-only peer" checked={confirm} />}
                                    <div className="w-11 h-6 bg-red-600
    peer-focus:outline-none  rounded-full peer dark:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                                    <span className="ml-3 text-sm font-medium text-black">{confirm && "completed" || "uncompleted"}</span>
                                </label>

                            </div>

                            <button className="h-[5vh] w-[4vw] border-2 border-black rounded-lg p-2 hover:text-white hover:bg-black active:text-sm" onClick={handleClick}>done</button>
                        </div>
                    </div>
                    : <p>loading</p>
            }
        </div>
    )
}

export default EditTodoComponent