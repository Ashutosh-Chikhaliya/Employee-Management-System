import React from 'react'

const AcceptTask = ({ data }) => {

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
                <div className='mt-4 flex justify-between gap-3'>
                    <button className='bg-green-500 px-1 py-2 w-1/2 rounded'>Mark as Complete </button>
                    <button className='bg-red-500 px-1 w-1/2 py-2 rounded'>Mark as Failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask
