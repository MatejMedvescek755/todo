import SingleTodoView from "./SingleTodoView";
import { Todo } from "../../../index"


export interface TabProps{
    todo:Todo
    onDeleteHandler:React.Dispatch<void>,
}

export default SingleTodoView