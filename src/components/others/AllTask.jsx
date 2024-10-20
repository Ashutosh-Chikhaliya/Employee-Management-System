import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)

    return (
        <div className='p-5 bg-[#0d1117] mt-5 rounded border-[1px] border-[#3d444d]'>
            <div className='bg-violet-900 py-2 px-4 flex justify-between items-center rounded'>
                <h2 className='w-1/6'>Name</h2>
                <h3 className='w-1/6'>New Task</h3>
                <h5 className='w-1/6'>Active Tasks</h5>
                <h5 className='w-1/6'>Completed Tasks</h5>
                <h5 className='w-1/6'>Failed Tasks</h5>
                <h5 className='w-1/6'>Total Tasks</h5>
            </div>

            <div className=' overflow-auto'>
                {authData.employees.map((elem, index) => {
                    return (
                        <div key={index} id='tasklist' className='bg-[#151b23] py-2 px-4 flex justify-between items-center rounded my-2'>
                            <h2 className='w-1/6 text-teal-50'>{elem.name}</h2>
                            <h3 className='w-1/6 text-blue-300'>{elem.taskCount.newTasks}</h3>
                            <h3 className='w-1/6 text-orange-300'>{elem.taskCount.activeTasks}</h3>
                            <h5 className='w-1/6 text-green-300'>{elem.taskCount.completedTasks}</h5>
                            <h5 className='w-1/6 text-red-300'>{elem.taskCount.failedTasks}</h5>
                            <h5 className='w-1/6 text-yellow-300'>{elem.taskCount.totalTasks}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask
