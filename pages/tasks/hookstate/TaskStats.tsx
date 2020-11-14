import { useTasksState } from 'states/TasksState'

export const TaskStats = () => {

    const tasks = useTasksState()

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            border: '2px green solid',
            marginBottom: 30
        }}>
            <div
                key="" style={{
                    border: '2px dodgerblue solid',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexGrow: 2
                }}
            >
                <div>Total tasks: {tasks.length}</div>
                <div>Done: {tasks.filter(i => i.Completed.value).length}</div>
                <div>Remaining: {tasks.filter(i => !i.Completed.value).length}</div>
                <div>% Done: {Math.floor(tasks.filter(i => i.Completed.value).length / tasks.length * 100)}</div>
            </div>
        </div>
    )
}
