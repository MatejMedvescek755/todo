import Tab from "./tab";

export interface TabProps{
    id:number;
    todo:string;
    completed:boolean;
    userId:number;
    setDeletedList:React.Dispatch<React.SetStateAction<number[]>>,
    deletedList:Array<number>,
}

export default Tab