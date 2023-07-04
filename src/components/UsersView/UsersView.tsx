import { getUser, getUsers, User } from "../../index"
import NavBar from "../NavBar/NavBar"
import React from "react"
import SingleUserView from "../SingleUserView/SingleUserView"
import { Link } from "react-router-dom"

const UsersView = () => {
    const [users, setUsers] = React.useState<User[]>()
    const [error, setError] = React.useState<any>();
    const [text, setText] = React.useState<string>("");
    const [ option, setOption ] = React.useState<string>("firstName")

    const handleClick = () => {
        getUsers(option, text).then((res)=>{
            setUsers(res)
        })
    }

    React.useEffect(() => {
        try {
            getUsers().then((res) => {
                setUsers(res)
            })
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }, [error])
    if (error)
        return <div>error: {error}</div>
    return (
        <div>
            <NavBar page="users" />
            {users ?
                <div className='flex flex-col items-center flex-wrap max-w-[100vw] min-h-[95vh] mt-5'>
                    <div className='flex w-[55vw] h-[8vh] flex-row justify-center items-end'>
                        <div className="h-[8vh] flex items-center">
                            <select name="cars" id="cars" onChange={(e) => setOption(e.target.value)} className=" mt-1 h-[5vh] mr-2">
                                <option value="firstName">first name</option>
                                <option value="lastName">last name</option>
                                <option value="id">user id</option>
                                <option value="age">age</option>
                                <option value="gender">gender</option>
                                <option value="username">username</option>
                            </select>
                        </div>
                        <div className='flex flex-col mb-4 w-[45vw]'>
                            <label htmlFor="add">search users</label>
                            <input className='2xl:w-[45vw] xl:w-[44vw] lg:w-[43vw]
            sm:w-[40vw] w-[38vw]  rounded-sm p-2' type="text" name="add" id="add" value={text} onChange={(e) => setText(e.target.value)} autoComplete='false' />
                        </div>
                        <div className='flex justify-center items-center w-[5vw] h-[10vh]'>
                            <button className='mt-6 min-w-fit border-2 p-2 border-white rounded-md' onClick={handleClick}>confirm</button>
                        </div>
                    </div>
                    <div className="h-[3vh] px-2 w-[55vw] flex">
                        <div className="w-[25vw]">Name</div>
                        <div className="w-[5vw]">Age</div>
                        <div className="w-[15vw]">University</div>
                    </div>
                    {users.map((user: User) => {
                        return (
                            <Link to={{ pathname: "" + user.id }}>
                                <SingleUserView key={user.id} user={user} />
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