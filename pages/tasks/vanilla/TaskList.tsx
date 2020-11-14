import React, { FC, useEffect, useState } from 'react'
import { TaskType } from '../../../models'
import Box from '@chakra-ui/core/dist/Box'
import Flex from '@chakra-ui/core/dist/Flex'

type Props = {
    tasks: TaskType[],
    toggleDone: (task: TaskType) => void,
    deleteTask: (event) => void
}

export const TaskList: FC<Props> = ({ tasks, toggleDone, deleteTask }) => {

    return (

        <Flex flexDirection='column' width="50%">
            <Flex flexDirection='row'>
                <Box>
                    <h2>Remaining:</h2>

                    {tasks &&
                        tasks.filter(t => !t.done).map((task, id) => {
                            return (<div key={id}>
                                <p>{task.title || task.title}</p>
                                <input
                                    onChange={() => toggleDone(task)}
                                    checked={task.done}
                                    type="checkbox"
                                />
                            </div>)
                        })}
                </Box>
                <Box>
                    <h2>Completed: </h2>

                    {tasks &&
                        tasks.filter(t => !!t.done).map((task, id) => {
                            return (<div key={id}>
                                <p>{task.title || task.title}</p>
                                <input
                                    onChange={() => toggleDone(task)}
                                    checked={task.done}
                                    type="checkbox"
                                />
                                <button onClick={() => deleteTask(task)}>x</button>
                            </div>)
                        })}
                </Box>
            </Flex>
        </Flex>
    )
}

export default TaskList