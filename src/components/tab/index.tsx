import Tab from "./tab";



export interface TabProps{
    id:number;
    todo:string;
    completed:boolean;
    userId:number;
    setTodoList:React.Dispatch<React.SetStateAction<number[]>>,
    todoList:Array<number>,
}

export default Tab