import React, { useEffect, useState } from 'react'
// useEffect: make a fetch to RESTFUL APIs everytime this component is rendered

import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

import EditToDo from './EditToDo'
import DeleteToDo from './DeleteToDo'

function ListToDo() {

    const [todos, setTodos] = useState([]) //create react state to storage database data


    const getTodos = async () => {
        try {
            // fetch API through GET method
            const response = await fetch('http://localhost:3000/todos')
            // parse JSON
            const jsonData = await response.json() // output: array of objects from the database
            setTodos(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    // console.log(todos)

    return (
        <div className='flex justify-center w-full'>
            <div className="w-1/2 font-serif">
                <h1 className='text-center text-xl'>To Do List: </h1>
                <table className='mt-3 w-full border-separate border-spacing-1'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md w-3/4 text-center'>Activity</th>
                            <th className='border border-slate-600 rounded-md w-1/4'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => {
                            return (
                                <tr key={todo.todo_id}>
                                    <td
                                        className='border border-slate-700 rounded-md'
                                    >
                                        <div className='ml-2'>
                                            {todo.description}
                                        </div>
                                    </td>
                                    <td
                                        className='border border-slate-700 rounded-md'
                                    >
                                        <div className='flex justify-center gap-x-4'>
                                            <EditToDo todo={todo} />
                                            <DeleteToDo todo={todo} />
                                        </div>
                                    </td>
                                </tr>

                            )

                        })}
                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default ListToDo