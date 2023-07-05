import { Container } from 'react-bootstrap'

import Home from './screens/Home'
import Navbar from './components/Nav'

function App() {
    return (
        <>
            <Navbar />
            <Container fluid='md' className='my-3'>
                <Home />
            </Container>
        </>
    )
}

export default App
