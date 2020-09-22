import { Flex, List, Stack } from '@chakra-ui/core'
import styles from './todos.module.css'
import { State, useState } from '@hookstate/core'
import { useAirtable } from '../../hooks/useAirtable'
import { useEffect } from 'react'
import { useTasksState } from 'states/TasksState'

import { Task } from 'models'
import { useSettingsState } from 'states/SettingsState'

// interface Task { name: string; priority?: number }

export const Tasks = () => {

    // const { tasks, getTasks } = useAirtable();

    // useEffect(() => {
    //     getTasks()
    // }, []);

    // console.log('process.env.REACT_APP_STORAGE_BUCKET :>> ', process.env.REACT_APP_STORAGE_BUCKET);
    // console.log('process :>> ', process.env.REACT_APP_API_KEY);

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
                <div style={{ minWidth: 400, maxWidth: 800, padding: 20 }}>
                    {/* <div style={{ marginBottom: 30 }}>
                        This is <a
                            style={{ color: '#09d3ac' }}
                            href="https://github.com/avkonst/hookstate"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Hookstate</a> demo application.
            Source code is on <a
                            style={{ color: '#09d3ac' }}
                            href="https://github.com/avkonst/hookstate/tree/master/docs/demos/todolist"
                            target="_blank"
                            rel="noopener noreferrer"
                        >GitHub</a>.
                    </div> */}
                    <SettingsViewer />
                    <TasksTotal />
                    <TasksViewer />
                </div>
            </div>
            <div style={{ flexGrow: 2 }} />
        </div>

    )
}


const TasksViewer = () => {
    const tasksState = useTasksState()

    if (tasksState.promised) {
        return <div style={{ textAlign: 'center' }}>
            Loading initial state asynchronously...
        </div>
    }

    return <div key="" style={{ textAlign: 'left', marginBottom: 50 }}>{
        tasksState.map((task, i) => <TaskEditor
            key={task.id.value}
            task={task}
        />)
    }
        <div style={{ textAlign: 'right' }} >
            <Button
                style={{ marginTop: 20, minWidth: 300 }}
                borderColor="lightgreen"
                onClick={() => {
                    tasksState[tasksState.length].set({
                        Id: Math.random().toString() + tasksState.length,
                        Title: 'Untitled Task #' + (tasksState.length + 1),
                        Completed: false
                    })
                }}
                text="Add new task"
            />
        </div>
    </div>
}


const TaskEditor = (props: { task: State<Task> }) => {
    const settingsState = useSettingsState()

    let taskState = useState(props.task)

    if (!settingsState.isScopedUpdateEnabled) {
        taskState = props.task
    }

    const taskNameGlobal = taskState.Title

    // Access and mutate a COPY of the global state (taskName)
    const taskNameLocal = useState(taskState.Title.get())

    const isEditing = useState(false)

    return (
        <div
            style={{
                display: 'flex',
                marginBottom: 10,
            }}
        >
            {settingsState.isHighlightUpdateEnabled &&
                <div
                    style={{
                        width: 10,
                        marginRight: 15,
                        backgroundColor: 'dodgerblue'
                    }}
                />
            }
            <div
                style={{
                    flexGrow: 2,
                    display: 'flex',
                    border: 'solid',
                    borderWidth: settingsState.isEditableInline || isEditing.get() ? 1 : 0,
                    borderColor: 'grey',
                }}
            >
                <div>
                    <input
                        style={{
                            transform: 'scale(2)',
                            margin: 20
                        }}
                        type="checkbox"
                        checked={taskState.done.get()}
                        onChange={() => taskState.done.set(p => !p)}
                    />
                </div>
                <div style={{ flexGrow: 2 }}>
                    <input
                        style={{
                            fontSize: '1em',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            width: '90%',
                            padding: 10,
                            textDecoration: taskState.done.get() ? 'line-through' : 'none',
                        }}
                        readOnly={!(settingsState.isEditableInline || isEditing.get())}
                        value={
                            settingsState.isEditableInline
                                ? taskNameGlobal.get()
                                : taskNameLocal.get()
                        }
                        onChange={e => {
                            if (settingsState.isEditableInline) {
                                taskNameGlobal.set(e.target.value)
                            }
                            taskNameLocal.set(e.target.value)
                        }}
                    />
                </div>
            </div>
            {!settingsState.isEditableInline &&
                <div>{isEditing.get()
                    ? <Button
                        style={{
                            marginLeft: 20
                        }}
                        borderColor="grey"
                        onClick={() => {
                            taskNameGlobal.set(taskNameLocal.get())
                            isEditing.set(false)
                        }}
                        text="Save"
                    />
                    : <Button
                        style={{
                            marginLeft: 20
                        }}
                        borderColor="grey"
                        onClick={() => isEditing.set(true)}
                        text="Edit"
                    />
                }</div>
            }
            <div>{isEditing.get()
                ? <Button
                    style={{ marginLeft: 15 }}
                    borderColor="red"
                    onClick={() => {
                        isEditing.set(false)
                        taskNameLocal.set(taskNameGlobal.get())
                    }}
                    text="Cancel"
                />
                : <Button
                    style={{ marginLeft: 15 }}
                    borderColor="red"
                    onClick={() => {
                        isEditing.set(false)
                        taskState.set(none)
                    }}
                    text="Delete"
                />
            }</div>
        </div>
    )
}


function SettingsViewer() {
    const settingsState = useSettingsState();

    return <div style={{
        border: 'solid',
        borderWidth: 1,
        borderColor: '#09d3ac',
        marginBottom: 30,
        fontSize: '0.8em',
        display: 'flex'
    }}>
        <div style={{ flexGrow: 2, display: 'flex' }}>
            <div>
                <input
                    style={{ transform: 'scale(1.6)', marginLeft: 20 }}
                    type="checkbox"
                    checked={settingsState.isEditableInline}
                    onChange={() => settingsState.toogleEditableInline()}
                />
            </div>
            <div style={{ paddingLeft: 10, paddingBottom: 10 }}>
                edit inline
            </div>
        </div>
        <div style={{ flexGrow: 2, display: 'flex' }}>
            <div>
                <input
                    style={{ transform: 'scale(1.6)', marginLeft: 20 }}
                    type="checkbox"
                    checked={settingsState.isScopedUpdateEnabled}
                    onChange={() => settingsState.toogleScopedUpdate()}
                />
            </div>
            <div style={{ paddingLeft: 10, paddingBottom: 10 }}>
                use scoped state
            </div>
        </div>
        <div style={{ flexGrow: 2, display: 'flex' }}>
            <div>
                <input
                    style={{ transform: 'scale(1.6)', marginLeft: 20 }}
                    type="checkbox"
                    checked={settingsState.isHighlightUpdateEnabled}
                    onChange={() => settingsState.toogleHighlightUpdate()}
                />
            </div>
            <div style={{ paddingLeft: 10, paddingBottom: 10, paddingRight: 10 }}>
                highlight updates
            </div>
        </div>
    </div>
}
// const state: State<Task[{name: 'First Task' }] as Task[]);

// return <>
//     {state.map((taskState: State<Task>, taskIndex) =>
//         <TaskEditor key={taskIndex} taskState={taskState} />
//     )}

//     <button onClick={() => state.merge([{ name: 'Untitled' }])}>Add task</button>

// </>



const TasksTotal = () => {

    const tasks = useTasksState()

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            border: '2px green solid',
            marginBottom: 30
        }}>
            <div
                key="" style={{
                    border: '2px dodgerblue solid',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexGrow: 2
                }}
            >
                <div>Total tasks: {tasks.length}</div>
                <div>Done: {tasks.filter(i => i.Completed.value).length}</div>
                <div>Remaining: {tasks.filter(i => !i.Completed.value).length}</div>
                <div>% Done: {Math.floor(tasks.filter(i => i.Completed.value).length / tasks.length * 100)}</div>
            </div>
        </div>
    )
}

// function TaskEditor(props: { taskState: State<Task> }) {

//     const taskState = props.taskState;

//     return <p><input
//         value={taskState.name.get()}
//         onChange={e => taskState.name.set(e.target.value + 5)}
//     /></p>
// }


function Button(props: {
    onClick?: () => void,
    borderColor?: string,
    text: string,
    style?: React.CSSProperties
}) {
    return <button
        style={{
            fontSize: '1em',
            border: 'solid',
            borderWidth: 1,
            borderColor: props.borderColor || 'grey',
            color: 'white',
            background: 'none',
            padding: 10,
            minWidth: 110,
            ...props.style
        }}
        onClick={() => props.onClick && props.onClick()}
    >{props.text}</button>
}


export default Tasks