import React, { useState, useContext } from 'react'
import { Row, Col, Form, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'

import Task from '../../components/Task'

import { AppContext } from '../../store'
import { addTask } from '../../actions/taskActions'

const index = () => {
    const [task, setTask] = useState({
        id: uuid(),
        title: '',
    })

    const {
        state: { tasks },
        dispatch,
    } = useContext(AppContext)

    return (
        <>
            <Row className='mb-3'>
                <Col>
                    <InputGroup>
                        <Form.Control
                            onChange={(e) =>
                                setTask((prevState) => {
                                    return {
                                        ...prevState,
                                        title: e.target.value,
                                    }
                                })
                            }
                            placeholder='Task'
                            value={task.title}
                        />
                        <Button
                            variant='outline-secondary'
                            onClick={(e) => {
                                addTask(dispatch, task)
                                setTask({
                                    id: uuid(),
                                    title: '',
                                })
                            }}
                        >
                            Add
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    {tasks.length === 0 ? (
                        <h6 className='text-center'>No Task</h6>
                    ) : (
                        <ListGroup>
                            {tasks.map((task, key) => (
                                <Task
                                    details={{
                                        id: task.id,
                                        title: task.title,
                                        key,
                                    }}
                                />
                            ))}
                        </ListGroup>
                    )}
                </Col>
            </Row>
        </>
    )
}

export default index
