import DeleteTodoComponent from "../DeleteTodoComponent"
import EditTodoComponent from "../EditTodoComponent/EditTodoComponent"
import Modal from "../Modal/Modal"
import React from "react"
import { useParams } from "react-router-dom"
import { Todo, User, getItem, getUser } from "../.."
import Checkmark from "../../assets/Checkmark"

const ManageTodoView = () => {
    const [isOpenEdit, setIsOpenEdit] = React.useState<boolean>(false)
    const [isOpenDelete, setIsOpenDelete] = React.useState<boolean>(false)
    const { id } = useParams<{id:string | undefined}>()
    const [todo, setTodo] = React.useState<Todo>()
    const [error, setError] = React.useState<any>();
    const [user, setUser] = React.useState<User>()

    React.useEffect(() => {
        try {

            loader(id).then((res) => {
                setTodo(res);
                getUser(res?.userId).then((resUser) => {
                    setUser(resUser)
                })
            })

        } catch (error) {
            console.error(error)
            setError(error)
        }

        return () => {
            setError(undefined)
        }
    }, [id])

    if (error)
        return <div>error {error}</div>
    if (todo === undefined)
        return <div>loading ...</div>
    return (
        <div>
            <div className="w-full h-[95vh] flex justify-center mt-10">
                <div className="shadow-xl shadow-gray-700 p-4 pb-8 flex flex-col justify-between
                 h-[30vh] rounded-lg bg-white">
                    <div className="text-black w-[25vw] flex justify-center">
                        {user ? <p>Owner of Todo: {`${user.firstName} ${user.lastName}`}</p> : <p>Loading...</p>}
                    </div>
                    <div className="w-[25vw] justify-center text-black p-2 flex">
                        <div><p className="font-mono text-lg">{todo.todo}</p></div>
                        <div className="ml-4">{todo.completed ? <Checkmark /> : ""}</div>
                    </div>
                    <div className="flex w-[25vw] items-center flex-col p-2 ">
                        <button className='mt-6 h-[5vh] w-[15vw] text-black min-w-fit border-2 p-2 border-black rounded-md' onClick={() => setIsOpenEdit(true)}>edit
                        </button>
                        <button className='mt-6 h-[5vh] w-[15vw] text-black min-w-fit border-2 p-2 border-black rounded-md' onClick={() => setIsOpenDelete(true)}>delete
                        </button>
                    </div>
                </div>

                <Modal isOpen={isOpenEdit}>
                    <EditTodoComponent todo={todo} setState={setIsOpenEdit} />
                </Modal>
                <Modal isOpen={isOpenDelete}>
                    <DeleteTodoComponent setState={setIsOpenDelete} />
                </Modal>
            </div>
        </div>
    )
}

const loader = async (id: string | undefined) => {
    try {
        if(id){
            const todo: Todo = await getItem(parseInt(id))
            return todo
        }
    } catch (error) {
        console.error(error)
    }
}


export default ManageTodoView