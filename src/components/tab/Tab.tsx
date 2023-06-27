import { TabProps } from "."
import  Checkmark  from "../../assets/Checkmark.tsx"
import { deleteItem } from "../../index.ts"

const Tab = ({id ,todo, completed, userId, setDeletedList, deletedList }: TabProps)=>{

    async function deleteTab() {
        console.log(id) 
        const newList = deletedList.concat([id])
        console.log(newList)
        setDeletedList(newList)
    }

    return(
        <div className="bg-white text-black mb-4 p-2 rounded-md flex w-[55vw] justify-between">
            <div className="flex h-[5vh] items-center">
                {completed && <Checkmark />}
                <p>{todo}</p>
            </div>
            <div>
                <button className="h-[5vh] w-[4vw] border-2 border-black rounded-lg p-2 hover:text-white hover:bg-black active:text-sm" onClick={deleteTab}>delete</button>
            </div>

        </div>
    )
}


export default Tab