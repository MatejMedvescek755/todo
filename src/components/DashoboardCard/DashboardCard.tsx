import { DashboardCardProps } from "."

const DashboardCard = ({title}:DashboardCardProps)=>{
    return(
        <a href="#" className="block max-w-sm p-6 mr-4  border  rounded-lg shadow  bg-[#242424] border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-[20vw]">here si a view with all the {title}</p>
                </a>
    )
}

export default DashboardCard