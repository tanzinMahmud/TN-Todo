import React, { useState, createContext } from 'react'
import { v4 as uuid } from 'uuid'

const TaskContext = createContext()
const TaskProvider = ({ children }) => {
    const [task, setTask] = useState({
        id: uuid(),
        title: '',
    })

    const [tasks, setTasks] = useState([])

    const addTasks = () => {
        if (task.title) {
            setTasks((prevState) => {
                return [...prevState, task]
            })
            setTask({
                id: uuid(),
                title: '',
            })
        }
    }

    const updateTasks = (id, value) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        title: value,
                    }
                } else {
                    return task
                }
            })
        )
    }

    const deleteTasks = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <TaskContext.Provider
            value={{
                task,
                setTask,
                tasks,
                setTasks,
                addTasks,
                updateTasks,
                deleteTasks,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider }
