import React, { FC, useEffect, useState } from 'react'
import { TaskType } from '../../../models'

import { db } from './firebase'

type Props = {
    // tasks: TaskType[]
}

export const TaskList: FC<Props> = () => {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {

        db.collection('tasks')
            .orderBy('datetime', 'desc')
            .onSnapshot(snapshot => {
                setTasks(snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        name: doc.data().task,
                        datatime: doc.data().datatime
                    }
                }))
            })

    }, [])

    return (
        <div>
            {tasks.map((task, id) => {
                <p>{task.name}</p>
            })}
        </div>
    )
}

export default TaskList