import TodoRow from "./TodoRow";
import { Todo } from "../../index"


export interface TabProps{
    todo:Todo
    onDeleteHandler:(id: number) => Promise<void>,
}

export default TodoRow