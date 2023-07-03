import Modal from "./Modal"

export interface ModalProps{
    isOpen:boolean,
    children: React.ReactNode | React.ReactNode[]
}

export default Modal