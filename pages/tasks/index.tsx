import React, { useState } from 'react'
import { Task } from '../../models'
import TaskEditor from './vanilla/TaskEditor'
import { createTask, deleteTask, tasksRef, toggleDone as toggleTaskDone } from '../../services/firebase'
import { TaskCard } from './vanilla/TaskCard'
import styles from './todos.module.css'
import Box from '@chakra-ui/core/dist/Box'
import Stack from '@chakra-ui/core/dist/Stack'
import FormControl from '@chakra-ui/core/dist/FormControl'
import { useFirestoreQuery } from '../../hooks'
import { Button } from '@chakra-ui/core'

const initialState = {
    isDev: true
}

const TasksView = () => {

    // const [tasks, setTasks] = useState([])

    const { data: tasks, status, error } = useFirestoreQuery(
        tasksRef
    )

    if (status === 'loading') {
        return 'Loading...'
    }

    if (status === 'error') {
        return `Error: ${error.message}`
    }

    console.log('data :>> ', tasks)
    // setTasks(data)

    // useEffect(() => {

    //     if (state.isDev) {
    //         let list = JSON.parse(sessionStorage.getItem('tasks')) || createFakeTasks(50)
    //         setTasks(list)
    //         sessionStorage.setItem('tasks', JSON.stringify(list))
    //     }
    //     else {

    //         // const { error, taskList, loading } = useTasks()
    //         // setTasks(taskList)


    //         // const { error, task, loading } = useTask('12345')
    //         // console.log('task :>> ', task)

    //         // tasksRef
    //         //     .onSnapshot(snapshot => {
    //         //         const list = snapshot.docs.map(doc => ({
    //         //             id: doc.id,
    //         //             ...doc.data()
    //         //         }))
    //         //         console.count('loaded')
    //         //         setTasks(list)
    //         //     })
    //     }
    // }, [state.isDev])

    const toggleCompleteTask = (task: Task) => {

        toggleTaskDone(task)

        // Local updates:
        // let index = tasks.indexOf(task)
        // let updatedTasks = Object.assign([...tasks], { [index]: { ...task, done: !task.done } })
        // setTasks(updatedTasks)
    }

    const remove = (task: Task) => {
        deleteTask(task)
        // let filtered = tasks.filter(item => ![task].includes(item))
    }


    return (
        <div>
            <FormControl display="flex" alignItems="center">
                {/* <FormLabel htmlFor="real-data" mb="0">
                    Enable real data?
                </FormLabel>
                <Switch id="real-data" color="teal" onChange={toggleDevMode} /> */}

                <Button onClick={() => {
                    const fakeRecords = createFakeTasks()
                    fakeRecords.forEach(task => {
                        createTask(task)
                    })

                }}>Create fake tasks</Button>
            </FormControl>

            <TaskStats
                toggleDone={toggleCompleteTask}
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
                <div className="task-editor">
                    <TaskEditor />
                </div>
                <Stack>
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
            </div>
        </Box>
    )
}

function createFakeTasks(limit = 5) {
    let nums = [...Array(limit)].map(() => Math.floor(Math.random() * limit))
    let list = Array.from([...new Set(nums)], (x) => { return { title: `Task ${x}`, done: !!(x % 0) } })
    return list
}


export default TasksView