import { getUsers, User } from "../../index"
import NavBar from "../NavBar/NavBar"
import React from "react"
import SingleUserView from "../SingleUserView/SingleUserView"

const UsersView = ()=>{
    const [users, setUsers ] = React.useState<User[]>()
    const [error, setError] = React.useState<any>();

    React.useEffect(()=>{
        try {
            getUsers().then((res)=>{
                setUsers(res)
            })   
        } catch (error) {
            console.error(error)
            setError(error)
        }
    },[error])
    if(error)
        return <div>error: {error}</div>
    return(
        <div>
            <NavBar page="users" />
            {users ? 
            <div className='flex flex-col items-center flex-wrap max-w-[100vw] min-h-[95vh] mt-5'>
                <div className="h-[3vh] px-2 w-[55vw] flex">
                    <div className="w-[25vw]">Name</div>
                    <div className="w-[5vw]">Age</div>
                    <div className="w-[15vw]">University</div>
                </div>
                {users.map((user:User)=>{
                    return(
                        <SingleUserView key={user.id} user={user} />
                    )
                })}
            </div>
            : 
            <p>Loading ...</p>}
        </div>
    )
}

export default UsersView