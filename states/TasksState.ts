import { createState, useState } from '@hookstate/core'
import { TaskType } from 'models'

const state = createState<TaskType[]>([
    // {
    //     Title: 'Eat pizza',
    //     Done: true,
    //     // Notes: '',
    //     // Status: TaskStatus,
    //     // Started: null,
    //     // Finished: null,
        
    // },
    // {
    //     Title: 'Learn hookstate',
    //     Done: false,
    // },
    // {
    //     Title: 'Wash car',
    //     Done: true,
    // },
    // {
    //     Title: 'Learn Krav',
    //     Done: false,
    // }
])

export function useTasksState() {
    return useState(state)
}