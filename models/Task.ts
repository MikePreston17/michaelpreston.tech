export interface TaskType {
    id: string,
    title: string,
    status: string,
    done: boolean,
    started: Date,
    completed: Date,
    notes: string,
}