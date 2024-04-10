import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksrequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from '../api/tasks';

const TasksContext = createContext();

export const useTasks = () => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }

    return context;
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksrequest();
            setTasks(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async (task) => {
        const res = await createTaskRequest(task);
        console.log(res)
    }

    const delateTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);

            if (res.status === 204) setTasks(tasks.filter(task => task._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task)
        } catch (error) {
            console.log(error)
        }

    }





    return (
        <TasksContext.Provider value={{
            createTask,
            getTasks,
            delateTask,
            tasks,
            getTask,
            updateTask,
        }}>
            {children}
        </TasksContext.Provider>
    )
}
