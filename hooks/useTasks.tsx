import { createContext, useContext, useEffect, useReducer } from 'react'

const context = createContext(null)

/**
 * Hook
 */
export const useTasks = () => {
    return useContext(context)
}

/**
 * Provider HOC
 */
export const ProvideTasks = ({ children }) => {
    const sessions = useTasksProvider()
    return (
        <context.Provider value={sessions}>{children}</context.Provider>
    )
}

export const TasksActions = {
    // Add = 'Add',
    // Save = 'Save',
    // ... etc (your switch enums / consts here)
}

/**
 * Modifies the current state according to the action specified 
 */
function reducer(state, action) {

    const { payload } = action

    switch (action.type) {

        // case Actions.Add:
        // case Actions.Save:
        // ... etc (your cases here)
        default:
            return {
                ...state,
                ...payload
            }
    }
}

const initialState = {
    /* Your state here */
    // todos: [],
    // isDirty: false,
}

function useTasksProvider() {
    const [state, dispatchTasks] = useReducer(reducer, initialState)

    useEffect(() => {
        // inits or fetches        
    }, [])

    // Your stateful API here
    // const save = () => { }
    // const add = () => { }

    return {

        // Api
        //save,
        //add,

        //Mods
        state,
        dispatchTasks
    }
}