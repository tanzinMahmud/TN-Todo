import { createContext, useReducer } from 'react'
import { taskReducer } from './reducers/taskReducer'

// initial state
const initialState = {
    tasks: [],
}

// reducer
const rootReducer = (state, action) => {
    return {
        tasks: taskReducer(state.tasks, action),
    }
}

// create context
const AppContext = createContext()

// create provider
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
