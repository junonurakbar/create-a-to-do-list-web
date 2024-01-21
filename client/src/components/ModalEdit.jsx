import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

function ModalEdit({ open, onClose, todo, desc }) {
    const [description, setDescription] = useState(desc)

    const updateDescription = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            // console.log(response)
            window.location = '/'
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        // backdrop
        <div onClick={onClose} className={`
            fixed inset-0 flex justify-center items-center 
            transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
        `}>
            {/* make the modal content here */}
            <div
                className='bg-white rounded-lg shadow w-3/4 p-5 m-5'
                // prevent to automatically closed when the modal is clicked
                onClick={e => e.stopPropagation()}
                onChange={e => e.target.value}
            >
                {/* make a close modal button */}
                <div className="border-b-2 text-center border-black/35 p-2">
                    <span className='text-xl left-5 w-3/4'>Edit Activity</span>
                    <div className="flex rounded-full float-end">
                        <span className='text-red-500 text-lg'>Close </span>
                        <button onClick={onClose}>
                            <IoMdCloseCircle className='text-red-500 text-2xl' />
                        </button>
                    </div>
                </div>

                {/* edit form */}
                <form action="" className='mt-5'>
                    <div className="input-activity flex text-lg justify-center gap-x-1">
                        <input
                            type="text"
                            className='border rounded-full border-slate-400 w-1/2 px-3 font-xl '
                            value={description}
                            // allow some changes on the text before submitting the button
                            onChange={e => setDescription(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='border rounded-lg px-3 border-slate-400 bg-sky-400 text-gray-200 font-xl hover:bg-green-700'
                            onClick={e => updateDescription(e)}
                        >Edit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ModalEdit