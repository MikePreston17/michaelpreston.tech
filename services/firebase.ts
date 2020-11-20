import firebase from 'firebase'
<<<<<<< Updated upstream

// import admin from 'firebase-admin'

// admin.initializeApp()

// const db = admin.firestore()

// module.exports = { admin, db }

// import firebase from 'firebase/app'
// import 'firebase/database'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'
// import { initFirestorter, Document, Collection } from 'firestorter'
// import { toJS } from 'mobx'

// import admin from 'firebase-admin'
=======
import { Task } from 'models'
>>>>>>> Stashed changes

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


<<<<<<< Updated upstream
// export const auth = firebase.auth();
// // export const db = firebaseApp.firestore();
// // export const db = firebase.firestore();
// export const db = admin.firestore()
// export const storage = firebase.storage();
=======
export const toggleDone = (task: Task) => {
    // console.log('task', task)
>>>>>>> Stashed changes

// // *** User API ***

// // const user = uid => new Document<any>(`users/${uid}`);

<<<<<<< Updated upstream
// // const users = () => new Collection("users");
=======
export const deleteTask = async (task: Task) => {
>>>>>>> Stashed changes

// const user = uid => firebase.database().ref(`users/${uid}`);

// // const users = () => db.ref('users');

// // *** Message API ***

<<<<<<< Updated upstream
// // const message = uid => db.ref(`messages/${uid}`);
=======
export const updateTask = async (task: Task) => {
    console.log('update task :>>', task)
    if (!task.id)
        return
>>>>>>> Stashed changes

// // const messages = () => db.ref('messages');

// // *** Merge Auth and DB User API *** //

<<<<<<< Updated upstream
// export const onAuthUserListener = (next, fallback) =>
//     auth.onAuthStateChanged(
//         async authUser => {
//             if (authUser) {
=======
export const createTask = async (task: Task) => {
>>>>>>> Stashed changes


//                 /** Using firebase db */
//                 user(authUser.uid)
//                     .once('value')
//                     .then(snapshot => {
//                         const dbUser = snapshot.val();


//                         /**Using firestore */
//                         // console.log('authUser (on state changed)', authUser.uid)
//                         // let document = user(authUser.uid);
//                         // await document.fetch();
//                         // console.log('document', document)

//                         // const dbUser = document.hasData ? toJS(document.data) : null;
//                         // console.log('dbUser', dbUser)

//                         if (!dbUser)
//                             return

//                         // default empty roles
//                         if (!dbUser.roles) {
//                             dbUser.roles = {};
//                         }

//                         // merge auth and db user
//                         authUser = {
//                             uid: authUser.uid,
//                             email: authUser.email,
//                             emailVerified: authUser.emailVerified,
//                             providerData: authUser.providerData,
//                             ...dbUser,
//                         };

//                         // console.log('(merged) authUser :>> ', authUser);

//                         next(authUser);
//                     });
//             } else {
//                 fallback();
//             }
//         });


// export {
//     firebase,
//     admin,
// }
