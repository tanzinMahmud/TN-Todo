import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'

import Home from './screens/Home'
import Navbar from './components/Nav'

function App() {
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

    const deleteTasks = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
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

    return (
        <>
            <Navbar />
            <Container fluid='md' className='my-3'>
                <Home
                    task={task}
                    addTasks={addTasks}
                    deleteTasks={deleteTasks}
                    updateTasks={updateTasks}
                    updateTask={setTask}
                    tasks={tasks}
                />
            </Container>
        </>
    )
}

export default App
