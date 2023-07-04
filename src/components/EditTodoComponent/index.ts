import { Todo } from "../..";
import EditTodoComponent from "./EditTodoComponent";

export interface EditTodoProps{
    setState:React.Dispatch<boolean>
    todo:Todo
}


export default EditTodoComponent