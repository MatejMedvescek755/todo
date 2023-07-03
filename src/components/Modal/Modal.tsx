import React from "react"
import { ModalProps } from "./index"

const Modal = ({ children , isOpen }:ModalProps) => {

    return (
        <div className="absolute top-32">
            <dialog open={isOpen} className=" bg-white shadow-xl shadow-gray-700 fixed top-100 left-50">
                {children}
            </dialog>
        </div>
    )
}



export default Modal