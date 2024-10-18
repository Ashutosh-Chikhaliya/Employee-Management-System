import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='flex justify-start items-center gap-5 flex-nowrap h-[55%] w-full py-10 mt-10 overflow-x-auto'>
            <div className='flex-shrink-0 h-full w-[335px] bg-emerald-900 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4>12-10-2003</h4>
                </div>
                <h2 className=' mt-5 text-2xl font-bold'>Make a Youtube video</h2>
                <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime sunt ipsum porro cumque, consectetur vel voluptas perferendis enim architecto consequuntur fugiat maiores adipisci similique repellendus quasi saepe excepturi neque?</p>
            </div>

            <div className='flex-shrink-0 h-full w-[335px] bg-pink-900 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4>12-10-2003</h4>
                </div>
                <h2 className=' mt-5 text-2xl font-bold'>Make a Youtube video</h2>
                <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime sunt ipsum porro cumque, consectetur vel voluptas perferendis enim architecto consequuntur fugiat maiores adipisci similique repellendus quasi saepe excepturi neque?</p>
            </div>

            <div className='flex-shrink-0 h-full w-[335px] bg-cyan-900 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4>12-10-2003</h4>
                </div>
                <h2 className=' mt-5 text-2xl font-bold'>Make a Youtube video</h2>
                <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime sunt ipsum porro cumque, consectetur vel voluptas perferendis enim architecto consequuntur fugiat maiores adipisci similique repellendus quasi saepe excepturi neque?</p>
            </div>

            <div className='flex-shrink-0 h-full w-[335px] bg-indigo-900 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                    <h4>12-10-2003</h4>
                </div>
                <h2 className=' mt-5 text-2xl font-bold'>Make a Youtube video</h2>
                <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime sunt ipsum porro cumque, consectetur vel voluptas perferendis enim architecto consequuntur fugiat maiores adipisci similique repellendus quasi saepe excepturi neque?</p>
            </div>
        </div>
    )
}

export default TaskList
