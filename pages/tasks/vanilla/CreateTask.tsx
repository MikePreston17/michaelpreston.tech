import React, { useState } from 'react'
import db from '../../../services/firebase'
import Button from '@chakra-ui/core/dist/Button'

const CreateTask = () => {

    const [form, updateForm] = useState({ title: '', notes: '', isEnabled: true })

    /**
     * Updates the appropriate state prop by its field name from the 
     * form where 'name' is a prop on the target component
     */
    const updateField = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        updateForm({ ...form, [name]: value })
    }

    const handleSubmit = (event) => {
        const { title, notes } = form
        event.preventDefault()
        db.firestore()
            .collection('tasks')
            .add({
                title: title,
                notes: notes,
                done: false,
                started: Date.now(),
                completed: null,
            })
        updateForm({ ...form, title: '', notes: '' })
    }

    const toggleForm = () => {
        updateForm({ ...form, isEnabled: !form.isEnabled })
    }

    return (
        <div>
            <Button
                size="xs"
                style={{
                    background: 'transparent',
                    color: '#afe',
                    borderRadius: '50px',
                    border: '.125rem solid #afe',
                }}
                onClick={toggleForm}>{!form.isEnabled ? '+' : '-'}</Button>

            {
                form.isEnabled &&
                <form onSubmit={handleSubmit}>
                    <div>
                        Title<br />
                        <input type="text"
                            style={{
                                background: 'transparent',
                                color: '#a14afe',
                                border: '.125rem solid #a14afe',
                            }}
                            value={form.title}
                            name="title"
                            onChange={updateField} />
                    </div>
                    <div>
                        Notes<br />
                        <textarea value={form.notes}
                            name='notes'
                            onChange={updateField}
                            style={{
                                background: 'transparent',
                                color: '#a14afe',
                                border: '.125rem solid #a14afe',
                            }}
                        />
                    </div>
                    <Button
                        style={{
                            background: 'transparent',
                            color: '#f4f6f8',
                            border: '.125rem solid #f20c4a',
                        }}
                        type="submit">Save</Button>
                </form>}
        </div>
    )
}
export default CreateTask