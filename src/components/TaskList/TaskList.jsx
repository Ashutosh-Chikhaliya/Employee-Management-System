import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    console.log(data)
    return (
        <div id='tasklist' className='flex justify-start items-center gap-5 flex-nowrap h-[55%] w-full py-10 mt-10 overflow-x-auto overflow-y-hidden'>
            {data.data.tasks.map((elem, index) => {
                if (elem.active) {
                    return <AcceptTask data={data} key={index} />
                }
                if (elem.completed) {
                    return <CompleteTask key={index} />
                }
                if (elem.failed) {
                    return <FailedTask key={index} />
                }
                if (elem.newTask) {
                    return <NewTask key={index} />
                }
            })}


        </div>
    )
}

export default TaskList
