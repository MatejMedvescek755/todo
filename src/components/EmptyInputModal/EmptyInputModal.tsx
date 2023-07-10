import { EmptyInputProps } from "."
 
const EmptyInputModal = ({setState}:EmptyInputProps)=>{
    function handleClick(){
        setState(false)
    }

    return (
        <div className="w-[20vw] h-[30vh] p-4 bg-white text-black flex  flex-col justify-between items-start rounded-lg">
            <div className="w-[20vw]">
                <p className="">input field cannot be empty</p>
            </div>
            <div className="w-[20vw]">
            <button className="h-[5vh] w-[4vw] border-2 border-black rounded-lg p-2 hover:text-white hover:bg-black active:text-sm" onClick={handleClick}>done</button>
            </div>
        </div>
    )
}

export default EmptyInputModal