import firebase from 'firebase'
import { Task } from 'models'

const config = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
}

try {
    firebase.initializeApp(config)
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

export const db = firebase
export default db

export const tasksRef = db.firestore().collection('tasks')

export const toggleDone = (task: Task) => {

    tasksRef.doc(task.id)
        .update({ done: !task.done })
        .catch(console.error)
}

export const deleteTask = async (task: Task) => {

    if (!task.id)
        return

    tasksRef.doc(task.id)
        .delete()
        .catch(console.error)

    return task.id
}

// export const updateTask = async (task: Task) => {
//     console.log('update task :>>', task)
//     if (!task.id)
//         return }

export const createTask = async (task: Task) => {

    let record = await tasksRef.add({
        ...task,
        done: false,
        status: null,
        due: null,
        created: Date.now()
    })
        .catch(console.error)

    console.log('record', record)

    return record
}