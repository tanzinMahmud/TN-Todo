import React, { useContext } from 'react'
import { Row, Col, Form, InputGroup, Button, ListGroup } from 'react-bootstrap'

import Task from '../../components/Task'

import { TaskContext } from '../../context/Task'

const index = () => {
    const { task, setTask, tasks, addTasks } = useContext(TaskContext)

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
                        <Button variant='outline-secondary' onClick={addTasks}>
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
