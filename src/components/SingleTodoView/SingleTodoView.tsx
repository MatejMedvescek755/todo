import { TabProps } from "./index.tsx"
import Checkmark from "../../assets/Checkmark.tsx"
import { Link } from "react-router-dom"
import DeleteIcon from "../../assets/DeleteIcon.tsx"

const SingleTodoView = ({ todo, onDeleteHandler }: TabProps) => {

    const onDelete = (event: React.MouseEvent) => {
        onDeleteHandler(todo.id)
    }
    return (
        <div className="group cursor-default mb-4 p-2 rounded-md flex w-[55vw]">
            <div className="flex h-[5vh] items-center text-2xl">
                <Link to={{ pathname: `${todo.id}` }}>
                    {todo.completed ? <p className="text-gray-600 group-hover:text-gray-100 cursor-pointer line-through">
                        {todo.todo}
                    </p> 
                    : 
                    <p className="text-gray-300 group-hover:text-gray-100 cursor-pointer">
                        {todo.todo}
                    </p>}
                </Link>
            </div>
            <div className="group-hover:flex cursor-pointer hidden px-2 items-center" onClick={onDelete}>
                <DeleteIcon />
            </div>

        </div>
    )
}


export default SingleTodoView