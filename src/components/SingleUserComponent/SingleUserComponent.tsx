
import { SingleUserProps } from ".";

const SingleUserComponent = ({ user }:SingleUserProps) =>{

    return(
        <div className="bg-white text-black mb-4 p-2 rounded-md flex w-[55vw] cursor-pointer">
            <div className="h-[5vh] w-[25vw] flex">
                <img src={user.image} alt="profile"
                className="rounded-full h-[5vh] w-[3vw]" />
                <div className="h-[5vh] w-[20vw] flex flex-col items-start">
                    <div className="font-body text-lg">{`${user.firstName} ${user.lastName}`}</div>
                    <div className="font-body text-sm">{user.email}</div>
                </div>
            </div>
            <div className="w-[5vw]">
                {user.age}
            </div>
            <div className="w-[15vw]">
                {user.university}
            </div>
        </div>
    )
}

export default SingleUserComponent