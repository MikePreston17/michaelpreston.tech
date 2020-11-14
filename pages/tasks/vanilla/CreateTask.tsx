import { useState } from 'react'
import db from './firebase'

const CreateTask = () => {
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [notification, setNotification] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        db.firestore()
            .collection('tasks')
            .add({
                title: title,
                done: false,
                started: Date.now(),
                completed: null,
                notes: notes,
            })
        setTitle('')
        setNotes('')
        setNotification('Task created')
        setTimeout(() => {
            setNotification('')
        }, 2000)
    }
    return (
        <div>
            <h2>Add Task</h2>
            {notification}
            <form onSubmit={handleSubmit}>
                <div>
                    Title<br />
                    <input type="text" value={title}
                        onChange={({ target }) => setTitle(target.value)} />
                </div>
                <div>
                    Notes<br />
                    <textarea value={notes}
                        onChange={({ target }) => setNotes(target.value)} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
export default CreateTask