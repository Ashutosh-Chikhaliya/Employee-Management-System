import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [Category, setCategory] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        const task = {
            taskTitle,
            taskDescription,
            assignTo,
            Category,
            taskDate,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };


        const data = userData

        data.forEach(elem => {
            if (assignTo == elem.name) {
                elem.tasks.push(task)
                elem.taskCount.newTasks = elem.taskCount.newTasks + 1;
                console.log(elem)
            }
        });
        setUserData(data)

        console.log(data)

        setTaskTitle("")
        setTaskDescription("")
        setTaskDate("")
        setAssignTo("")
        setCategory("")
    }
    return (
        <div>
            <div className='px-7 py-7 mt-7 bg-[#0d1117] rounded border-[1px] border-[#3d444d]'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-wrap w-full items-start justify-between'
                >
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                                value={taskTitle}
                                className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text"
                                placeholder='make UI design'
                                onChange={(e) => {
                                    setTaskTitle(e.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                                value={taskDate}
                                className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="date"
                                onChange={(e) => {
                                    setTaskDate(e.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Asign To</h3>
                            <input
                                value={assignTo}
                                className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text"
                                placeholder='employee name'
                                onChange={(e) => {
                                    setAssignTo(e.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                                value={Category}
                                className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                                type="text"
                                placeholder='design, dev, etc'
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                            />
                        </div>

                    </div>
                    <div className='w-2/5 flex flex-col items-start '>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea
                            value={taskDescription}
                            className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            name=""
                            id=""
                            rows={30}
                            cols={30}
                            onChange={(e) => {
                                setTaskDescription(e.target.value);
                            }}>
                        </textarea>
                        <button
                            className='bg-emerald-500 py-3 px-3 mt-4 text-sm w-full rounded hover:bg-emerald-600'>Create Task</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default CreateTask
