import React from 'react'

const TaskListNumber = ({ data }) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='w-[45%] px-10 py-7 bg-red-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >{data.data.taskCount.totalTasks}</h2>
                <h3 className='text-xl font-medium'>Total Tasks</h3>
            </div>

            <div className='w-[45%] px-10 py-7 bg-blue-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >{data.data.taskCount.newTasks}</h2>
                <h3 className='text-xl font-medium'>New Tasks</h3>
            </div>

            <div className='w-[45%] px-10 py-7 bg-green-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >{data.data.taskCount.completedTasks}</h2>
                <h3 className='text-xl font-medium'>Completed Tasks</h3>
            </div>

            <div className='w-[45%] px-10 py-7 bg-yellow-400 rounded-xl'>
                <h2 className='text-3xl font-bold' >{data.data.taskCount.activeTasks}</h2>
                <h3 className='text-xl font-medium'>Active Tasks</h3>
            </div>

        </div>
    )
}

export default TaskListNumber
