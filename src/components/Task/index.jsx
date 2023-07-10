import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import './style.css'

import { AppContext } from '../../store'
import { updateTask, deleteTask } from '../../actions/taskActions'

const index = ({ details }) => {
    const { dispatch } = useContext(AppContext)

    const updateOneTask = (task) => {
        const inputValue = window.prompt(`Task: ${task.title}`)
        if (inputValue) {
            updateTask(dispatch, { id: task.id, title: inputValue })
        }
    }

    const deleteOneTask = (id) => {
        if (window.confirm('Are you sure?')) {
            deleteTask(dispatch, { id })
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
