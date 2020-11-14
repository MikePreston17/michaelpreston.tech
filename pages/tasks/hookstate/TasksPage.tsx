import { Flex, List, Stack } from '@chakra-ui/core'
import { useAirtable } from '../../../hooks/useAirtable'
import { useEffect } from 'react'
// import { taskCollection } from './TaskStore'
import { TasksViewer } from './TasksViewer'
import { TaskStats } from './TaskStats'
import { TaskSettingsView } from './TaskSettingsView'
// import { useTasks } from '../../../hooks/useTasks'

export const TasksPage = () => {

    console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY)

    // useEffect(() => {
    //     effect
        
    // }, []);

    return (
        <div style={{
            display: 'flex',
            backgroundColor: '#1f1f1f'
        }}>
            <div style={{ flexGrow: 2 }} />
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: 28,
                color: 'white',
            }}>
                <div style={{ minWidth: 400, maxWidth: 800, padding: 20, color: '#09d3ac' }}>
                    <TaskSettingsView />
                    <TaskStats />
                    <TasksViewer />
                </div>
            </div>
            <div style={{ flexGrow: 2 }} />
        </div>
    )
}

export default TasksPage


// const state: State<Task[{name: 'First Task' }] as Task[]);

// return <>
//     {state.map((taskState: State<Task>, taskIndex) =>
//         <TaskEditor key={taskIndex} taskState={taskState} />
//     )}

//     <button onClick={() => state.merge([{ name: 'Untitled' }])}>Add task</button>

// </>


// function TaskEditor(props: { taskState: State<Task> }) {

//     const taskState = props.taskState;

//     return <p><input
//         value={taskState.name.get()}
//         onChange={e => taskState.name.set(e.target.value + 5)}
//     /></p>
// }