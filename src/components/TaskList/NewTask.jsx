import React from 'react'

const NewTask = () => {
    return (
        <div>
            <div className='flex-shrink-0 h-full w-[335px] bg-emerald-900 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4>12-10-2003</h4>
                </div>
                <h2 className=' mt-5 text-2xl font-bold'>Make a Youtube video</h2>
                <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime sunt ipsum porro cumque, consectetur vel voluptas perferendis enim architecto consequuntur fugiat maiores adipisci similique repellendus quasi saepe excepturi neque?</p>

                <div className='mt-9'>
                    <button className='bg-blue-500 px-3 py-2 w-full rounded'>Accept Task</button>
                </div>
            </div>
        </div>
    )
}

export default NewTask
