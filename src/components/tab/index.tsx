import Tab from "./tab";



export interface TabProps{
    id:number;
    todo:string;
    completed:boolean;
    userId:number;
    setTodos:React.Dispatch<React.SetStateAction<number[]>>,
    todos:Array<number>,
}

export default Tab