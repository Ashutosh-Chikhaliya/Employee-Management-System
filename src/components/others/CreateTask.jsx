import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <div className='px-7 py-7 mt-7 bg-[#1b2430] rounded'>
                <form className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='make UI design' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
                            <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                        </div>

                    </div>
                    <div className='w-2/5 flex flex-col items-start '>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" rows={30} cols={30}></textarea>
                        <button className='bg-emerald-500 py-3 px-3 mt-4 text-sm w-full rounded hover:bg-emerald-600'>Create Task</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default CreateTask
