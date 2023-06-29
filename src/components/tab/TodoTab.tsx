import { TabProps } from "./index.tsx"
import  Checkmark  from "../../assets/Checkmark.tsx"

const TodoTab = ({todo, onDeleteHandler }: TabProps)=>{
    const onDelete = (event)=>{
        event.preventDefault()
        onDeleteHandler(todo.id)
    }
    return(
        <div className="bg-white text-black mb-4 p-2 rounded-md flex w-[55vw] justify-between">
            <div className="flex h-[5vh] items-center">
                {todo.completed && <Checkmark />}
                <p>{todo.todo}</p>
            </div>
            <div>
                <button className="h-[5vh] w-[4vw] border-2 border-black rounded-lg p-2 hover:text-white hover:bg-black active:text-sm" onClick={onDelete}>delete</button>
            </div>

        </div>
    )
}


export default TodoTab