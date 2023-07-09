import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import './style.css'

import { TaskContext } from '../../context/Task'

const index = ({ details }) => {
    const { deleteTasks, updateTasks } = useContext(TaskContext)

    const deleteOneTask = (id) => {
        if (window.confirm('Are you sure?')) {
            deleteTasks(id)
        }
    }

    const updateOneTask = (task) => {
        const inputValue = window.prompt(`Task: ${task.title}`)
        if (inputValue) {
            updateTasks(task.id, inputValue)
        }
    }

    return (
        <ListGroup.Item>
            <div className='d-flex justify-content-between'>
                <div>{`${details.key + 1}. ${details.title}`}</div>
                <div>
                    <FontAwesomeIcon
                        icon={faEdit}
                        className='mx-1 m_pntr'
                        onClick={() => updateOneTask(details)}
                    />
                    <FontAwesomeIcon
                        icon={faTrash}
                        className='mx-1 m_pntr'
                        onClick={() => deleteOneTask(details.id)}
                    />
                </div>
            </div>
        </ListGroup.Item>
    )
}

export default index
