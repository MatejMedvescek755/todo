import React from "react"

const Modal = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {

    return (
        <div className="absolute top-32">
            <dialog open={true} className=" bg-white shadow-xl shadow-gray-700 fixed top-100 left-50">
                {children}
            </dialog>
        </div>
    )
}



export default Modal