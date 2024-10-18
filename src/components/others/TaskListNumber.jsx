import React from 'react'

const TaskListNumber = () => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='w-[45%] px-10 py-7 bg-red-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='w-[45%] px-10 py-7 bg-blue-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='w-[45%] px-10 py-7 bg-green-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='w-[45%] px-10 py-7 bg-yellow-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

        </div>
    )
}

export default TaskListNumber
