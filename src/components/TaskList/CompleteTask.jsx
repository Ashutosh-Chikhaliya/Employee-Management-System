import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div>
            <div className='flex-shrink-0 h-[400px] w-[335px] bg-emerald-900 rounded-xl p-5 flex flex-col justify-between'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className='bg-red-500 px-3 py-1 rounded'>{data.category}</h3>
                        <h4>12-10-2003</h4>
                    </div>
                    <h2 className='text-2xl font-bold my-5'>{data.taskTitle}</h2>
                    <p className='text-sm'>{data.taskDescription}</p>
                </div>
                <div className=''>
                    <button className='bg-green-200 text-green-600 px-3 py-2 w-full rounded'>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default CompleteTask
