import { TabProps } from "."

const Tab = ({ todo, completed, userId }: TabProps)=>{
    return(
        <div className="">
            <p>{todo}</p>
        </div>
    )
}


export default Tab