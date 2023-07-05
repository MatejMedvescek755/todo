import { getUser, getUsers, User } from "../../index"
import React from "react"
import SingleUserComponent from "../SingleUserComponent/SingleUserComponent"
import { Link } from "react-router-dom"

const UsersView = () => {
    const [users, setUsers] = React.useState<User[]>()
    const [error, setError] = React.useState<any>();
    const [text, setText] = React.useState<string>("");
    const [option, setOption] = React.useState<string>("firstName")


    React.useEffect(() => {
        try {
            getUsers(option, text).then((res) => {
                setUsers(res)
            })
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }, [error, text])
    if (error)
        return <div>error: {error}</div>
    return (
        <div>

            {users ?
                <div className='flex flex-col items-center flex-wrap max-w-[100vw] min-h-[95vh] mt-5'>
                    <div className='flex w-[55vw] h-[8vh] flex-row mb-4 items-end'>
                        <div className="h-[8vh] flex items-end">
                            <select name="cars" id="cars" onChange={(e) => setOption(e.target.value)} className="bg-gray-700 border-2 border-lg border-gray-700 h-[6vh] w-[8vw] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-l-lg focus:outline-none text-white capitalize ">
                                <option value="firstName">First Name</option>
                                <option value="lastName">Last name</option>
                                <option value="id">user id</option>
                                <option value="age">age</option>
                                <option value="gender">gender</option>
                                <option value="username">username</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-[45vw]'>
                            <input className='bg-[#242424] border-2 border-lg border-gray-700 border-r border-r-none 2xl:w-[47vw] xl:w-[46vw] lg:w-[45vw]
            sm:w-[43vw] w-[40vw] h-[6vh] block p-2.5 z-20 text-sm text-gray-900 rounded-r-lg focus:ring-blue-500 bg-gray-700 placeholder-gray-400 text-white' type="text" name="add" id="add" value={text} onChange={(e) => setText(e.target.value)} placeholder="search for users" autoComplete='false' />
                        </div>
                    </div>
                    <div className="h-[3vh] px-2 w-[55vw] flex">
                        <div className="w-[25vw]">Name</div>
                        <div className="w-[5vw]">Age</div>
                        <div className="w-[15vw]">University</div>
                    </div>
                    {users.map((user: User) => {
                        return (
                            <Link to={{ pathname: `${user.id}` }}>
                                <SingleUserComponent key={user.id} user={user} />
                            </Link>
                        )
                    })}
                </div>
                :
                <p>Loading ...</p>}
        </div>
    )
}

export default UsersView