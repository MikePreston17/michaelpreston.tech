import React, { useEffect } from 'react'
// import { observer } from 'mobx-react'
// import { Task } from '../../models'
import { TaskButton } from './TaskButton'
import { TaskEditor } from './TaskEditor'
import { useTasks } from '../../hooks/useTasks'
import { createState, useState } from '@hookstate/core'
import PageSpinner from './PageSpinner'

import { tasks } from './TaskStore'

const state = createState([])

export const TasksViewer = () => {

    // const { tasks, isLoading, createTask } = useTasks()

    const tasksState = useState(state)

    // useEffect(() => {
    //     // TODO: update, merge or set the tasks hook state here
    //     tasksState.set(tasks)
    // }, [isLoading])

    const add = () => {

        // let newTask = {
        //     Id: Math.random().toString() + tasksState.length,
        //     Title: 'Untitled Task #' + (tasksState.length + 1),
        //     Done: false
        // }

        // tasksState[tasksState.length].set(newTask)
        // await createTask(newTask)
    }

    return (
        // <div>Nothing here</div>
        <div key="" style={{ textAlign: 'left', marginBottom: 50 }}>
            {
                // isLoading
                // !(state.length > 0)
                //     ? <PageSpinner />
                //     : tasksState.map((task, index) =>
                //         <TaskEditor
                //             key={task?.id?.value || index}
                //             task={task}
                //         />)
                tasksState.length > 0
                    ? tasksState.map((task, index) =>
                        <TaskEditor
                            key={task?.id?.value || index}
                            task={task}
                        />)
                    : <div>No Tasks Today</div>
            }
            <div style={{ textAlign: 'right' }}>
                <TaskButton
                    style={{ marginTop: 20, minWidth: 300 }}
                    borderColor="lightgreen"
                    onClick={add}
                    text="Add new task" />
            </div>
        </div>
    )
}


// const { docs, isLoading } = taskCollection

// const [docs, setDocs] = useState([])
// const [isLoading, setIsLoading] = useState(true)

// useEffect(() => {

//     /** FireSTORE way */
//     docRef.get()
//         .then((doc) => {
//             if (doc.exists)
//                 console.log('doc :>> ', doc.data())
//             else {
//                 console.log('No such document!')
//             }
//         })


//     /** Firestorter way */
//     //     tasks.fetch()
//     //         .then((response) => {
//     //             // let data = toJS(response.data as any)
//     //         })

// }, [])


export default TasksViewer