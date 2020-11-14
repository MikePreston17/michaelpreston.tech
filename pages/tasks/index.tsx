import React, { useEffect, useState } from 'react'
import { TaskType } from '../../models'
import CreateTask from './vanilla/CreateTask'
import db from './vanilla/firebase'
import TaskList from './vanilla/TaskList'

export default function Index() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    const tasksRef = db.firestore().collection('tasks')

    useEffect(() => {
        tasksRef
            .onSnapshot(snapshot => {
                const list = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTasks(list)
            })
    }, [])

    const toggleDone = (task: TaskType) => {
        let index = tasks.indexOf(task)
        let updatedTasks = Object.assign([...tasks], { [index]: { ...task, done: !task.done } })
        tasksRef.doc(task.id)
            .update({ done: !task.done })
            .then((response) => { console.log('response :>> ', response) })
            .catch(console.error)
    }


    const deleteTask = (task: TaskType) => {
        tasksRef.doc(task.id).delete()
            .catch(console.error)
    }

    return (
        <div>
            <TaskList
                toggleDone={toggleDone}
                deleteTask={deleteTask}
                tasks={tasks}
            />
            <CreateTask />
        </div>
    )
}