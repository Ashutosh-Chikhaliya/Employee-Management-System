import React from 'react'

const AcceptTask = () => {
    return (
        <div>
            <div className='flex-shrink-0 h-full w-[335px] bg-emerald-900 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                </div>
                <h2 className=' mt-5 text-2xl font-bold'>Make a Youtube video</h2>
                <p className='text-sm mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maxime sunt ipsum porro cumque, consectetur vel voluptas perferendis enim architecto consequuntur fugiat maiores adipisci similique repellendus quasi saepe excepturi neque?</p>

                <div className='mt-9 flex justify-between gap-3'>
                    <button className='bg-green-500 px-1 py-2 w-1/2 rounded'>Mark as Complete </button>
                    <button className='bg-red-500 px-1 w-1/2 py-2 rounded'>Mark as Failed</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptTask
