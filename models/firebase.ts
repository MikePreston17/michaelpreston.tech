export interface Task {
    id: string,
    title: string,
    done: boolean,
    status: string,
    notes: string,
    started_at: Date,
    completed_at: Date,
    updated_at: Date,
    due_at: Date,
    expires_at: Date,
}