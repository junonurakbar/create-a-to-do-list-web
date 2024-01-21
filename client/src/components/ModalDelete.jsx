import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { FaCheck } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

function ModalDelete({ open, onClose, todo }) {
    const [id, setId] = useState(todo.todo_id)

    const deleteTodo = async (e) => {

        try {
            const deleteToDo = await fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE"
            })
            // console.log(deleteToDo)
            window.location = '/'
        }
        catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div onClick={onClose} className={`
            fixed inset-0 flex justify-center items-center 
            transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
        `}>
            {/* content */}
            <div
                className='p-3 m-2 justify-center items-place-center bg-white sm:w-3/4 md:w-1/2 rounded-xl'
                // prevent to automatically closed when the modal is clicked
                onClick={e => e.stopPropagation()}
            >
                {/* modal header */}
                <div className="border-b-2 text-center border-black/35 p-2 w-full">
                    <span className='text-xl left-5'>Delete Activity</span>
                    <div className="flex rounded-full float-end">
                        <span className='text-red-500 text-lg'>Close </span>
                        <button onClick={onClose}>
                            <IoMdCloseCircle className='text-red-500 text-2xl' />
                        </button>
                    </div>
                </div>

                {/* modal body */}
                <div className='mt-3 w-full'>
                    <p className='text-lg text-center'>You sure you want to delete this activity?</p>
                    <div className='flex mt-3 justify-center gap-x-1'>
                        <button
                            className='bg-red-500 rounded-md p-1 text-white/75'
                            onClick={e => deleteTodo(e)}
                        >
                            <FaCheck className='text-white/75' />
                        </button>
                        <button
                            className='bg-green-500 rounded-md p-1 text-white/75'
                            onClick={onClose}
                        >
                            <GrClose className='' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalDelete