import { ADD, UPDATE, DELETE } from '../constants/taskConstants'

const addTask = (dispatch, payload) => {
    dispatch({ type: ADD, payload })
}
const updateTask = (dispatch, payload) => {
    dispatch({ type: UPDATE, payload })
}
const deleteTask = (dispatch, payload) => {
    dispatch({ type: DELETE, payload })
}

export { addTask, updateTask, deleteTask }
