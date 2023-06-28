import TodoTab from "./TodoTab";
import { Todo } from "../../../index"


export interface TabProps{
    todo:Todo
    onDeleteHandler:React.Dispatch<void>,
}

export default TodoTab