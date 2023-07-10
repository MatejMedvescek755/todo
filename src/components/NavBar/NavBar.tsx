import { Link } from "react-router-dom"
import { NavBarProps } from "."
import TodoIcon from "../../assets/TodoIcon"

const NavBar = ({ page }: NavBarProps) => {
    return (
        <div className="max-w-[100vw] h-[7vh] sticky bg-emerald-500 flex font-mono tracking-[1px] leading-[1.27em] text-sm">
            <Link to={"/"}>
                <div className="w-[3vw] h-[7vh] flex justify-center items-center">
                    <TodoIcon />
                </div>
            </Link>
            <Link to={"/"}>
                <div className="p-2 w-[4vw] h-full flex items-center justify-center hover:bg-emerald-600 cursor-pointer active:text-xs" >
                    {page === "home" ? <p className="underline underline-offset-2">HOME</p> : <p>HOME</p>}
                </div>
            </Link>
            <Link to={"/todos"}>
                <div className="p-2 w-[4vw] h-full flex items-center justify-center  hover:bg-emerald-600 cursor-pointer active:text-xs ">
                    {page === "todos" ? <p className="underline underline-offset-2">TODOS</p> : <p>TODOS</p>}
                </div>
            </Link>
            <Link to={"/users"}>
                <div className="p-2 w-[4vw] h-full flex items-center justify-center  hover:bg-emerald-600 cursor-pointer active:text-xs">
                    {page === "users" ? <p className="underline underline-offset-2">USERS</p> : <p>USERS</p>}
                </div>
            </Link>
        </div>
    )
}

export default NavBar