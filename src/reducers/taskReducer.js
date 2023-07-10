import { ADD, UPDATE, DELETE } from '../constants/taskConstants'

const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        case UPDATE:
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        title: action.payload.title,
                    }
                } else {
                    return task
                }
            })
        case DELETE:
            return state.filter((task) => task.id !== action.payload.id)
        default:
            return []
    }
}

export { taskReducer }
