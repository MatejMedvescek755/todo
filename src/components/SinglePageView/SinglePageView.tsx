import DeleteTodoComponent from "../DeleteTodoComponent"
import EditTodoComponent from "../EditTodoComponent/EditTodoComponent"
import Modal from "../Modal/Modal"
import React from "react"
import NavBar from "../NavBar/NavBar"

const SingleTodoView = () =>{
    const [isOpenEdit, setIsOpenEdit ] = React.useState<boolean>(false)
    const [ isOpenDelete, setIsOpenDelete ] = React.useState<boolean>(false)
 

    return(
        // <Modal >
        //     <EditTodoComponent />
        // </Modal>
        <div className="w-screen h-screen">
            <NavBar/>
            <div className="flex w-[20vw] justify-around">
            <button className='mt-6 min-w-fit border-2 p-2 border-white rounded-md' onClick={()=>setIsOpenEdit(true)}>edit</button>
            <button className='mt-6 min-w-fit border-2 p-2 border-white rounded-md'onClick={()=>setIsOpenDelete(true)}>delete</button>
            </div>

            <Modal isOpen={isOpenEdit}>
                <EditTodoComponent setState={setIsOpenEdit} />
            </Modal>
            <Modal isOpen={isOpenDelete}>
                <DeleteTodoComponent setState={setIsOpenDelete}/>
            </Modal>
        </div>
    )
}


export default SingleTodoView