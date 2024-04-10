import React from 'react'
import './TaskCardStyle.css'
import { useTasks } from '../../context/tasksContext'
import { Link } from 'react-router-dom'
export const TaskCard = ({ task }) => {

    const { delateTask } = useTasks()

    return (
        <div className='task-card'>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <div className='task-card-buttons'>
                <Link to={`/tasks/${task._id}`} className='edit'>Edit</Link>
                <button onClick={() => delateTask(task._id)} className='delete'>Delete</button>
            </div>
        </div>
    )
}
