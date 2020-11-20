<<<<<<< Updated upstream:models/Task.ts
export interface TaskType {
=======
export interface Task {
>>>>>>> Stashed changes:models/firebase.ts
    id: string,
    title: string,
    status: string,
    done: boolean,
    started: Date,
    completed: Date,
<<<<<<< Updated upstream:models/Task.ts
    notes: string,
=======
    updated: Date,
    due: Date,
    expires: Date,
>>>>>>> Stashed changes:models/firebase.ts
}