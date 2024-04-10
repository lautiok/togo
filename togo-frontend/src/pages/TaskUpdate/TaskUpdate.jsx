import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useTasks } from '../../context/tasksContext'
import './TaskUpdateStyle.css'


export const TaskUpdate = () => {

    const { register, handleSubmit, setValue, getValues } = useForm()
    const { updateTask, getTask } = useTasks()
    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id)
                console.log(task)
                setValue('title', task.title)
                setValue('description', task.description)
                setValue('status', task.status) // Set the initial value of status
            }
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        // Extracting status from form data
        const { status, ...taskData } = data;
        // Adding status to the task data
        const updatedTask = { ...taskData, status };
        try {
            await updateTask(params.id, updatedTask)
            navigate('/tasks')
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <div className='task-form-page'>
            <h1>Update Task</h1>
            <div className='register-task'>
                <form className='register-form-task' onSubmit={onSubmit}>
                    <input type="text" placeholder='Title'
                        {...register('title', { required: true })}
                        autoFocus
                    />
                    <textarea rows="3" placeholder='Description'
                        {...register('description', { required: true })}></textarea>

                    <button>Save Task</button>
                </form>
            </div>

        </div >
    )
}