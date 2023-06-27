import { TabProps } from "."
import  Checkmark  from "../../assets/Checkmark.tsx"


const Tab = ({ todo, completed, userId }: TabProps)=>{
    return(
        <div className="bg-white text-black mb-4 p-4 rounded-md flex w-[50vw] justify-between">
            <p>{todo}</p>
            <div className="flex ">
                {completed && <Checkmark />}
            </div>
        </div>
    )
}


export default Tab