import React, { useEffect, useState } from 'react';
import { useTasks } from '../../context/tasksContext';
import { Link } from 'react-router-dom';
import './TaskPageStyle.css';

export const TaskPage = () => {
    const { getTasks, tasks, updateTask, delateTask } = useTasks();
    const [updatedTasks, setUpdatedTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    console.log(tasks);


    useEffect(() => {
        setUpdatedTasks(tasks);
    }, [tasks]);

    const filterTasksByStatus = (status) => {
        if (!updatedTasks) return [];
        return updatedTasks.filter(task => task.status === status);
    };

    const startDrag = (e, task) => {
        e.dataTransfer.setData('taskId', task._id);
        console.log(task);
    };

    const draggingOver = (e) => {
        e.preventDefault();
    };

    const onDrop = async (e, status) => {
        const taskId = e.dataTransfer.getData('taskId');
        const task = tasks.find(task => task._id === taskId);
        task.status = status;

        try {
            await updateTask(taskId, task);

            const updatedTasks = tasks.filter(t => t._id !== taskId);
            setUpdatedTasks([...updatedTasks, task]);
        } catch (error) {
            console.log(error);
        }
    };

    const generateRandomPastelColor = () => {
        const r = Math.floor(Math.random() * 100) + 100;
        const g = Math.floor(Math.random() * 100) + 100;
        const b = Math.floor(Math.random() * 100) + 100;
        return `rgb(${r}, ${g}, ${b})`;
    };

    // Función para obtener el color asociado con la tarea del almacenamiento local
    const getColorForTask = (taskId) => {
        // Verifica si hay un color almacenado para esta tarea
        const storedColor = localStorage.getItem(`taskColor_${taskId}`);
        return storedColor || generateRandomPastelColor(); // Devuelve el color almacenado o uno nuevo
    };

    // Función para guardar el color asociado con la tarea en el almacenamiento local
    const saveColorForTask = (taskId, color) => {
        // Solo guarda el color si no está ya guardado
        if (!localStorage.getItem(`taskColor_${taskId}`)) {
            localStorage.setItem(`taskColor_${taskId}`, color);
        }
    };


    return (
        <div className='task-page'>
            <button className='add-task'><Link to='/tasks/addtask' className='add-task-link'>Add Task</Link></button>
            <div className='task-page-container'>
                <div className='status-container' draggable="true" onDragOver={draggingOver} onDrop={(e) => onDrop(e, 'pending')}>
                    <h1>Pending</h1>
                    {filterTasksByStatus('pending').map(task => {
                        const taskColor = getColorForTask(task._id);
                        saveColorForTask(task._id, taskColor);
                        return (
                            <div key={task._id} className='task-card' draggable onDragStart={(e) => startDrag(e, task)} style={{ backgroundColor: taskColor }}>
                                <h1>{task.title}</h1>
                                <p>{task.description}</p>
                                <div className='task-card-buttons'>
                                    <a href={`/tasks/${task._id}`} className='edit'>Edit</a>
                                    <button onClick={() => delateTask(task._id)} className='delete'>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='status-container' draggable="true" onDragOver={draggingOver} onDrop={(e) => onDrop(e, 'in-progress')}>
                    <h1>In Progress</h1>
                    {filterTasksByStatus('in-progress').map(task => {
                        const taskColor = getColorForTask(task._id);
                        saveColorForTask(task._id, taskColor);
                        return (
                            <div key={task._id} className='task-card' draggable onDragStart={(e) => startDrag(e, task)} style={{ backgroundColor: taskColor }}>
                                <h1>{task.title}</h1>
                                <p>{task.description}</p>
                                <div className='task-card-buttons'>
                                    <a href={`/tasks/${task._id}`} className='edit'>Edit</a>
                                    <button onClick={() => delateTask(task._id)} className='delete'>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='status-container' draggable="true" onDragOver={draggingOver} onDrop={(e) => onDrop(e, 'done')}>
                    <h1>Done</h1>
                    {filterTasksByStatus('done').map(task => {
                        const taskColor = getColorForTask(task._id);
                        saveColorForTask(task._id, taskColor);
                        return (
                            <div key={task._id} className='task-card' draggable onDragStart={(e) => startDrag(e, task)} style={{ backgroundColor: taskColor }}>
                                <h1>{task.title}</h1>
                                <p>{task.description}</p>
                                <div className='task-card-buttons'>
                                    <a href={`/tasks/${task._id}`} className='edit'>Edit</a>
                                    <button onClick={() => delateTask(task._id)} className='delete'>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};