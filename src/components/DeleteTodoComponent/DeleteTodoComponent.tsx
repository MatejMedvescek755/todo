import { DeleteTodoProps } from "."



const DeleteTodoComponent = ({ setState }: DeleteTodoProps) => {
    function handleClick(event: React.MouseEvent) {
        setState(false)
    }
    return (
        <div>
            <div className="w-[20vw] h-[30vh] p-4 bg-white text-black flex  flex-col justify-between items-start rounded-lg">
                <h1 className="p-2 font-black text-xl">
                    Are you sure you want to delete your Todo
                </h1>
                <div className="w-[18vw] h-[5vh] items-center flex justify-between">
                    <button className="h-[5vh] w-[4vw] border-2 border-black rounded-lg p-2 hover:text-white hover:bg-black active:text-sm" onClick={handleClick}>delete</button>
                </div>
            </div>
        </div>
    )
}


export default DeleteTodoComponent