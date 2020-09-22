import { createState, useState } from '@hookstate/core'
import { Task } from 'models'


const state = createState<Task[]>([
    {
        Title: 'Eat pizza',
        Completed: true,
        // Notes: undefined,
        // Status: TaskStatus,
        // Started: null,
        // Finished: null,
        
    },
    {
        Title: 'Learn hookstate',
        Completed: false,
    },
    {
        Title: 'Wash car',
        Completed: true,
    },
])

export function useTasksState() {
    return useState(state)
}