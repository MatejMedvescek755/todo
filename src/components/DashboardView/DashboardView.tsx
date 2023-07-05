import {  Link } from "react-router-dom";
import DashboardCard from "../DashoboardCard/DashboardCard";

const DashboardView = () => {

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[80vw] h-full flex flex-wrap p-4">
                <Link to={"/todos"}>
                    <DashboardCard title="todos"/>
                </Link>
                <Link to={"users"}>
                    <DashboardCard title="users" />
                </Link>
                
            </div>
        </div>
    )
}

export default DashboardView