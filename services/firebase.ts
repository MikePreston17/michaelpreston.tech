import firebase from 'firebase'

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

// export const toggleDone = (task: Task) => {

//     tasksRef.doc(task.id)
//         .update({ done: !task.done })
//         // .then((response) => { console.log('response :>> ', response) })
//         .catch(console.error)
// }

// export const deleteTask = async (task: Task) => {

//     if (!task.id)
//         return

//     tasksRef.doc(task.id)
//         .delete()
//         .catch(console.error)

//     //TODO: return deleted Id
// }

// export const updateTask = async (task: Task) => {
//     console.log('update task :>>', task)
//     if (!task.id)
//         return

    

//     export const createTask = async (task: Task) => {
//     }