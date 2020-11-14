import { none, State, useState } from '@hookstate/core'
import { useSettingsState } from '../../states/SettingsState'
import { Task } from '../../models'
import { TaskButton } from './TaskButton'


export const TaskEditor = (props: { task: State<Task>; }) => {
    const settingsState = useSettingsState()

    let taskState = useState(props.task)

    if (!settingsState.isScopedUpdateEnabled) {
        taskState = props.task
    }

    const taskNameGlobal = taskState.Title

    // Access and mutate a COPY of the global state (taskName)
    const taskNameLocal = useState(taskState.Title.get())

    const isEditing = useState(false)

    return (
        <div
            style={{
                display: 'flex',
                marginBottom: 10,
            }}
        >
            {settingsState.isHighlightUpdateEnabled &&
                <div
                    style={{
                        width: 10,
                        marginRight: 15,
                        backgroundColor: 'dodgerblue'
                    }} />}
            <div
                style={{
                    flexGrow: 2,
                    display: 'flex',
                    border: 'solid',
                    borderWidth: settingsState.isEditableInline || isEditing.get() ? 1 : 0,
                    borderColor: 'grey',
                }}
            >
                <div>
                    <input
                        style={{
                            transform: 'scale(2)',
                            margin: 20
                        }}
                        type="checkbox"
                        checked={taskState.Done.get()}
                        onChange={() => taskState.Done.set(p => !p)} />
                </div>
                <div style={{ flexGrow: 2 }}>
                    <input
                        style={{
                            fontSize: '1em',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            width: '90%',
                            padding: 10,
                            textDecoration: taskState.Done.get() ? 'line-through' : 'none',
                        }}
                        readOnly={!(settingsState.isEditableInline || isEditing.get())}
                        value={settingsState.isEditableInline
                            ? taskNameGlobal.get()
                            : taskNameLocal.get()}
                        onChange={e => {
                            if (settingsState.isEditableInline) {
                                taskNameGlobal.set(e.target.value)
                            }
                            taskNameLocal.set(e.target.value)
                        }} />
                </div>
            </div>
            {!settingsState.isEditableInline &&
                <div>{isEditing.get()
                    ? <TaskButton
                        style={{
                            marginLeft: 20
                        }}
                        borderColor="grey"
                        onClick={() => {
                            taskNameGlobal.set(taskNameLocal.get())
                            isEditing.set(false)
                        }}
                        text="Save" />
                    : <TaskButton
                        style={{
                            marginLeft: 20
                        }}
                        borderColor="grey"
                        onClick={() => isEditing.set(true)}
                        text="Edit" />}</div>}
            <div>{isEditing.get()
                ? <TaskButton
                    style={{ marginLeft: 15 }}
                    borderColor="red"
                    onClick={() => {
                        isEditing.set(false)
                        taskNameLocal.set(taskNameGlobal.get())
                    }}
                    text="Cancel" />
                : <TaskButton
                    style={{ marginLeft: 15 }}
                    borderColor="red"
                    onClick={() => {
                        isEditing.set(false)
                        taskState.set(none)
                    }}
                    text="Delete" />}</div>
        </div>
    )
}
