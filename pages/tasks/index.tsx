import React, { useEffect, useState } from 'react'
import { Task } from '../../models'
import CreateTask from './vanilla/CreateTask'
import db, { tasksRef } from '../../services/firebase'
import TaskList, { TaskCard } from './vanilla/TaskList'
import styles from './todos.module.css'
import Box from '@chakra-ui/core/dist/Box'
import Stack from '@chakra-ui/core/dist/Stack'

export default function Index() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        tasksRef
            .onSnapshot(snapshot => {
                const list = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.count('loaded')
                setTasks(list)
            })
    }, [])

    const toggleDone = (task: Task) => {
        let index = tasks.indexOf(task)
        let updatedTasks = Object.assign([...tasks], { [index]: { ...task, done: !task.done } })

        if (!task.id)
            return

        tasksRef.doc(task.id)
            .update({ done: !task.done })
            .catch(console.error)
    }

    const deleteTask = (task: Task) => {

        if (!task.id)
            return

        tasksRef.doc(task.id).delete()
            .catch(console.error)
    }

    return (
        <div>
            <TaskStats
                toggleDone={toggleDone}
                deleteTask={deleteTask}
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