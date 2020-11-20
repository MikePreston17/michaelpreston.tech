export interface Task {
    id: string,
    title: string,
    done: boolean,
    status: string,
    notes: string,
    started: Date,
    completed: Date,
    updated: Date,
    due: Date,
    expires: Date,
}