import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


import './TaskFormPageStyle.css'
import { useTasks } from '../../context/tasksContext'

export const TaskFormPage = () => {

    const { register, handleSubmit, } = useForm()
    const { createTask } = useTasks()
    const navigate = useNavigate()



    const onSubmit = handleSubmit((data) => {
        createTask(data)
        navigate('/tasks')
    })

    return (
        <div className='task-form-page'>
            <h1>New Task</h1>
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

        </div>
    )
}
