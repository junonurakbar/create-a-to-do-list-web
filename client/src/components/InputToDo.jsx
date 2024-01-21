import React, { useState } from 'react'


const InputToDo = () => {
    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()  //prevent the page to refresh
        try {
            const body = { description }
            const response = await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            // console.log(response)
            window.location = '/'  //reload the page to the '/' link
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="flex justify-center">
            <div className='relative ml-3 w-3/4 mt-5 p-2 font-serif'>
                <h1 className='text-3xl inset-0 text-center'>Input To Do</h1>
                <form action="" className='mt-5' onSubmit={onSubmitForm}>
                    <div className="input-activity flex gap-x-2 text-lg justify-center">
                        <input
                            type="text"
                            className='border rounded-full border-slate-400 w-1/2 px-3 font-xl '
                            placeholder="Enter your activity"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <button type='submit' className='border rounded-lg px-3 border-slate-400 bg-sky-400 text-gray-200 font-xl hover:bg-green-700'>Add</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default InputToDo