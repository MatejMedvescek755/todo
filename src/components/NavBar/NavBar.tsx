import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <div className="w-screen h-[7vh] sticky bg-emerald-500 flex font-body tracking-[1px] leading-[1.27em] text-sm">
            <Link to={"/"}>
                <div className="p-2 w-[4vw] h-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer active:text-xs hover:underline underline-offset-2" ><p>HOME</p></div>
            </Link>
            <Link to={"/todos"}>
                <div className="p-2 w-[4vw] h-full flex items-center justify-center  hover:bg-emerald-600 cursor-pointer active:text-xs hover:underline underline-offset-2"><p>TODOS</p></div>
            </Link>
            <Link to={"/users"}>
                <div className="p-2 w-[4vw] h-full flex items-center justify-center  hover:bg-emerald-600 cursor-pointer active:text-xs hover:underline underline-offset-2"><p>USERS</p></div>
            </Link>
        </div>
    )
}

export default NavBar