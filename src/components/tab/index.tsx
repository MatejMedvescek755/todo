import Tab from "./Tab";
import { Todo } from "../../index"


export interface TabProps{
    Todo:Todo
    onDeleteHandler:React.Dispatch<React.SetStateAction<number>>,
}



export default Tab