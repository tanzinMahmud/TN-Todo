import React from 'react'
import { Row, Col, Form, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const index = () => {
    return (
        <>
            <Row className='mb-3'>
                <Col>
                    <InputGroup>
                        <Form.Control placeholder='Task' />
                        <Button variant='outline-secondary'>Add</Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <div className='d-flex justify-content-between'>
                                <div>This is task 1</div>
                                <div>
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className='mx-1 m_pntr'
                                    />
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className='mx-1 m_pntr'
                                    />
                                </div>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>This is task 1</ListGroup.Item>
                        <ListGroup.Item>This is task 1</ListGroup.Item>
                        <ListGroup.Item>This is task 1</ListGroup.Item>
                        <ListGroup.Item>This is task 1</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default index
