import React from "react"
import { useParams } from "react-router-dom"
import { Todo, User, deleteItem, getUser, getUserTodos } from "../.."
import SingleTodoView from "../SingleTodoView"

const UserTodosView = () => {
    const { userId } = useParams()
    const [error, setError] = React.useState<any>();
    const [user, setUser] = React.useState<User>();
    const [userTodos, setUserTodos] = React.useState<Todo[]>();

    const onDeleteHandler = async (id: number) => {
        try {
            const obj = await deleteItem(id)
            if(!userTodos) return
            const list = userTodos.map((el) => {
                if (el.id == id) {
                    return obj
                } else {
                    return el
                }
            })
            setUserTodos(list)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }

    React.useEffect(() => {
        try {
            if(!userId) return
            getUser(parseInt(userId)).then((res) => {
                setUser(res)
            })
            getUserTodos(parseInt(userId)).then((res) => {
                setUserTodos(res)
            })

        } catch (error) {
            setError(error)
            console.error(error)
        }
    }, [userId])
    if (error) return <div>error: {error}</div>
    return (
        <div className="h-full w-full">
            <div className="w-full h-[95vh] flex flex-col items-center">
                <div className="w-[55vw] mt-4 bg-white text-black rounded-md  p-2">
                    { user ? <p className=" h-[5vh] flex items-center">{`${user.firstName} ${user.lastName}`}'s todos</p> : <p className=" h-[5vh]">Loading...</p>}
                </div>
                <div className="mt-4">
                    {
                        userTodos ? userTodos.map((todo: Todo) => {
                            if(!todo.isDeleted){
                                return <SingleTodoView todo={todo} onDeleteHandler={onDeleteHandler} />
                            }
                        }) :
                            <p>Loading...</p>
                    }
                </div>
            </div>
        </div>
    )
}




export default UserTodosView