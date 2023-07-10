import { useState } from "react";
import { EditTodoProps } from ".";


const EditTodoComponent = ({ setState,todo }: EditTodoProps) => {
    const [confirm, setConfirm] = useState<boolean>()
    const [ text, setText ] = useState<string>()

    function handleClick() {
        setState(false)
        console.log(text)
    }

    function handleToggle() {
        if(confirm !== undefined){
            setConfirm(!confirm)
        }else{
            setConfirm(!todo.completed)
        }

    }
    return (
        <div className="w-[20vw] h-[30vh] p-4 bg-white text-black flex  flex-col justify-between items-start rounded-lg">
            <h1 className="p-2 font-black text-xl">
                Edit your todo
            </h1>
            {
                todo ?
                    <div className="flex flex-col justify-between h-[25vh]">
                        <input type="text" name={todo.id + ""} id={todo.id + ""} defaultValue={todo.todo} autoComplete="off"
                            onChange={(e) => setText(e.target.value)}
                            className="bg-white border-2 border-black rounded-md w-[90%] h-[5vh] mb-5 p-2" />
                        <div className="w-[18vw] h-[5vh] items-center flex justify-between">
                            <div className="items-center h-[5vh] flex ">
                                <label className="relative inline-flex items-center cursor-pointer mb-4">
                                    { confirm !== undefined ?  <input onChange={handleToggle} type="checkbox" className="sr-only peer" checked={confirm} /> : <input onChange={handleToggle} type="checkbox" className="sr-only peer" checked={todo.completed} /> }
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