import TodoTab from "./TodoTab";
import { Todo } from "../../index"


export interface TabProps{
    Todo:Todo
    onDeleteHandler:React.Dispatch<React.SetStateAction<number>>,
}

export default TodoTab