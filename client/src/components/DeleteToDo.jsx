import React, { useState } from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import ModalDelete from './ModalDelete'

function DeleteToDo({ todo }) {
    const [openDelete, setOpenDelete] = useState(false)

    return (
        <div className='flex place-items-center'>
            {/* make a button to open the modal */}
            <button onClick={() => {
                setOpenDelete(true)

            }}>
                <MdOutlineDelete className='text-2xl text-red-500' />
            </button>

            <ModalDelete open={openDelete} onClose={() => setOpenDelete(false)} todo={todo} />

        </div>
    )
}

export default DeleteToDo