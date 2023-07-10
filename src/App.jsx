import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'

import Home from './screens/Home'
import Navbar from './components/Nav'

import { AppProvider } from './store'

function App() {
    return (
        <AppProvider>
            <Navbar />
            <Container fluid='md' className='my-3'>
                <Home />
            </Container>
        </AppProvider>
    )
}

export default App
