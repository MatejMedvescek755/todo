import Tab from "./tab";

export interface TabProps{
    id:number;
    todo:string;
    completed:boolean;
    userId:number;
}

export default Tab