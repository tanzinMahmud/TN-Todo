import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const index = () => {
    return (
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='#'>Todo</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default index
