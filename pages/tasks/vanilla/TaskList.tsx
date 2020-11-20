import React, { FC, useEffect, useState } from 'react'
import { Task } from '../../../models'
import Box from '@chakra-ui/core/dist/Box'
import Flex from '@chakra-ui/core/dist/Flex'
import { Card } from '../../../components/molecules'
import Button from '@chakra-ui/core/dist/Button'
import Heading from '@chakra-ui/core/dist/Heading'
import Stack from '@chakra-ui/core/dist/Stack'

type Props = {
    tasks: Task[],
    toggleDone: (task: Task) => void,
    deleteTask: (event) => void
}

export const TaskList: FC<Props> = ({ tasks, toggleDone, deleteTask }) => {

    return (

        <Flex flexDirection='column' width="50%">
            <Flex flexDirection='row'>
                <Box>
                    <h2>Remaining:</h2>

                    {tasks &&
                        tasks.filter(t => !t.done).map((task, id) =>
                            <TaskCard
                                task={task}
                                toggleDone={toggleDone}
                                deleteTask={deleteTask}
                                key={id}
                            />
                        )}
                </Box>
                <Box>
                    <h2>Completed: </h2>

                    {tasks &&
                        tasks.filter(t => !!t.done).map((task, id) =>
                            <TaskCard
                                task={task}
                                toggleDone={toggleDone}
                                deleteTask={deleteTask}
                                key={id}

                            />
                        )}
                </Box>
            </Flex>
        </Flex>
    )
}


export const TaskCard = ({ task, toggleDone, deleteTask }) => {

    return (
        <Card
            style={
                {
                    border: '1px rgb(255, 173, 65) solid',
                    margin: '.125rem'
                }
            }
        >{{

            header: <Heading
                style={{ textDecoration: task.done ? 'line-through' : '' }}
                size="lg">{task.title}</Heading>,
            // actions: <div></div>,
            // media: <Image />,
            content: <Stack direction="row">
                <div
                    // className={styles.button}
                    style={{ textDecoration: task.done ? 'line-through' : '' }}
                >
                    {task.notes}
                </div>


            </Stack>,

            actions: <Flex direction="row">
                {/* <input
                    onChange={() => toggleDone(task)}
                    checked={task.done}
                    type="checkbox"
                /> */}

                {!task.done && <Button
                    size="xs"
                    style={{
                        background: 'transparent',
                        color: '#1a7',
                        border: '.125rem solid #2a5',
                    }}
                    onClick={() => deleteTask(task)}
                >x</Button>}

                {!task.done &&
                    <Button
                        size="xs"
                        style={{
                            background: 'transparent',
                            color: 'rgb(12, 124, 251)',
                            border: '.125rem solid rgb(36, 110, 194)',
                        }}
                        onClick={() => toggleDone(task)}>Complete</Button>}

            </Flex>
        }}</Card>

        // <Stack direction="row">
        //     <div
        //         className={styles.button}
        //         style={{ textDecoration: task.completed ? "line-through" : "" }}
        //     >
        //         {task.title}
        //     </div>
        //     <Button onClick={() => toggleComplete(index)}>Complete</Button>
        //     <Button
        //         style={{ background: "#a14afe" }}
        //         onClick={() => removeTask(index)}>x</Button>
        // </Stack>
    )
}

export default TaskList