import React, { useEffect, useState } from 'react'
import { Task } from '../../models'
import CreateTask from './vanilla/CreateTask'
import db, { deleteTask, tasksRef, updateTask } from '../../services/firebase'
import TaskList, { TaskCard } from './vanilla/TaskList'
import styles from './todos.module.css'
import Box from '@chakra-ui/core/dist/Box'
import Stack from '@chakra-ui/core/dist/Stack'
import Switch from '@chakra-ui/core/dist/Switch'
import FormLabel from '@chakra-ui/core/dist/FormLabel'
import FormControl from '@chakra-ui/core/dist/FormControl'

const initialState = {
    isDev: true
}

export default function Index() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')
    const [state, setState] = useState(initialState)

    useEffect(() => {

        if (state.isDev) {
            let list = JSON.parse(sessionStorage.getItem('tasks')) || createFakeTasks(50)
            setTasks(list)
            sessionStorage.setItem('tasks', JSON.stringify(list))
        }
        else {
            tasksRef
                .onSnapshot(snapshot => {
                    const list = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    console.count('loaded')
                    setTasks(list)
                })
        }
    }, [state.isDev])

    const toggleDone = (task: Task) => {

        updateTask(task)

        // Local updates:
        let index = tasks.indexOf(task)
        let updatedTasks = Object.assign([...tasks], { [index]: { ...task, done: !task.done } })
        setTasks(updatedTasks)
    }

    const remove = (task: Task) => {
        deleteTask(task)

        let filtered = tasks.filter(item => ![task].includes(item))
    }

    const toggleDevMode = () => setState({
        ...state,
        isDev: !state.isDev
    })

    return (
        <div>
            <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="real-data" mb="0">
                    Enable real data?
                </FormLabel>
                <Switch id="real-data" color="teal" onChange={toggleDevMode} />
            </FormControl>
            <TaskStats
                toggleDone={toggleDone}
                deleteTask={remove}
                tasks={tasks}
            />
        </div>
    )
}

const TaskStats = ({ tasks, toggleDone, deleteTask }) => {

    const tasksRemaining = tasks.filter(task => !task.done).length

    const percentDone = Math.ceil(100 - tasksRemaining / (tasks.length || 1) * 100)

    return (
        <Box className={styles.body}>
            <div className={styles['todo-list']}>
                <div className={styles.header}>Pending tasks ({tasksRemaining})</div>
                <div className={styles.header}>{`${percentDone}% complete`}</div>
                <Stack
                >
                    {tasks
                        .sort((a, b) => a.done - b.done)
                        .map((task, index) => (
                            <TaskCard
                                task={task}
                                key={index}
                                toggleDone={toggleDone}
                                deleteTask={deleteTask}
                            />
                        ))}
                </Stack>
                <div className="create-task">
                    <CreateTask />
                </div>
            </div>
        </Box>
    )
}


function createFakeTasks(limit = 5) {
    let nums = [...Array(limit)].map(() => Math.floor(Math.random() * limit))
    let list = Array.from([...new Set(nums)], (x, index) => { return { title: `Task ${x}`, done: !!(x % 0) } })
    return list
}