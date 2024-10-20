import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

    return (
        <div id='tasklist' className='flex justify-start items-center gap-5 flex-nowrap w-full py-10 mt-10 overflow-x-auto'>
            {data.data.tasks.map((elem, index) => {
                if (elem.active) {
                    return <AcceptTask key={index} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={index} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={index} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={index} data={elem} />
                }
            })}


        </div>
    )
}

export default TaskList
