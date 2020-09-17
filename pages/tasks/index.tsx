import { Box, List, Stack } from '@chakra-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './todos.module.css'


export const Todo = () => {

    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: "Grab some Pizza",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    });

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const percentDone = Math.ceil(
        tasks.filter(t => !!t.completed).length / tasks.length * 100);

    return (
        <Box className={styles.body}>
            <div className={styles['todo-list']}>
                <div className={styles.header}>Pending tasks ({tasksRemaining})</div>
                <span className={styles.header}>{`${percentDone}% complete`}</span>
                <Stack
                // className={styles.tasks}
                >
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            completeTask={completeTask}
                            removeTask={removeTask}
                            key={index}
                        />
                    ))}
                </Stack>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        </Box>
    );
}

const Task = ({ task, index, completeTask, removeTask }) => {
    return (
        <div
            className={styles.button}
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            <button onClick={() => completeTask(index)}>Complete</button>
        </div>
    )
}

const CreateTask = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

export default Todo
