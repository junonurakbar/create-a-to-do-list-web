import React, { useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import ModalEdit from './ModalEdit'

function EditToDo({ todo }) {
    const [openEdit, setOpenEdit] = useState(false)


    return (
        <div className='flex place-items-center'>
            {/* make a button to open the modal */}
            <button onClick={() => {
                setOpenEdit(true)

            }}>
                <AiOutlineEdit className='text-2xl text-yellow-600' />
            </button>

            <ModalEdit open={openEdit} onClose={() => setOpenEdit(false)} todo={todo} desc={todo.description} />

        </div>
    )
}

export default EditToDo