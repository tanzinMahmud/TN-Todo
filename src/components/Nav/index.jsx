import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

import './style.css'

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
