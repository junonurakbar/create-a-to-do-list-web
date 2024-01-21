import React from 'react'
import InputToDo from '../components/InputToDo'
import ListToDo from '../components/ListToDo'

function Home() {
    return (
        <div className='flex flex-col w-full justify-center'>
            <InputToDo />
            <ListToDo />
        </div>
    )
}

export default Home