import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'

import Home from './screens/Home'
import Navbar from './components/Nav'

import { TaskProvider } from './context/Task'

function App() {
    return (
        <TaskProvider>
            <Navbar />
            <Container fluid='md' className='my-3'>
                <Home />
            </Container>
        </TaskProvider>
    )
}

export default App
