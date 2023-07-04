import NavBar from "../NavBar/NavBar"
import React from "react"
import { useParams } from "react-router-dom"
import { Todo, User, getUser, getUserTodos } from "../.."
import SingleTodoView from "../SingleTodoView"

const UserTodosView = () => {
    const { userId } = useParams()
    const [error, setError] = React.useState<any>();
    const [user, setUser] = React.useState<User>();
    const [userTodos, setUserTodos] = React.useState<Todo[]>();

    const onDeleteHandler = async (id: number) => {
        try {
            const obj = await deleteItem(id)
            const list = todos["todos"].map((el) => {
                if (el.id == id) {
                    return obj
                } else {
                    return el
                }
            })
            const newTodo = {
                todos: list,
                total: todos["total"],
                skip: todos["skip"],
                limit: todos["limit"]
            }
            setTodos(newTodo)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }

    React.useEffect(() => {
        try {
            getUser(parseInt(userId)).then((res) => {
                setUser(res)
            })
            getUserTodos(parseInt(userId)).then((res) => {
                setUserTodos(res)
                console.log(res)
            })

        } catch (error) {
            setError(error)
            console.error(error)
        }
    }, [userId])
    if (error) return <div>error: {error}</div>
    return (
        <div className="h-full w-full">
            <NavBar page="users" />
            <div className="w-full h-[95vh] flex flex-col items-center">
                <div className="w-[55vw] mt-4 bg-white text-black rounded-md  p-2">
                    { user ? <p className=" h-[5vh] flex items-center">{user.firstName+" "+user.lastName}'s todos</p> : <p className=" h-[5vh]">Loading...</p>}
                </div>
                <div className="mt-4">
                    {
                        userTodos ? userTodos.map((todo: Todo) => {
                            return <SingleTodoView todo={todo} onDeleteHandler={onDeleteHandler} />
                        }) :
                            <p>Loading...</p>
                    }
                </div>
            </div>
        </div>
    )
}




export default UserTodosView