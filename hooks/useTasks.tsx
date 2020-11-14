import React, { useContext, createContext, useState, useEffect } from 'react'
import { Task } from '../models'
import Airtable from 'airtable'
import Axios from 'axios'

const airtableContext = createContext(null)

export const useTasks = () => useContext(airtableContext)

const apiKey = 'keyl5Wo5ETa4HR4tt'// process.env.REACT_APP_AIRTABLE_API_KEY
const baseId = 'appH3uOdlqTnBw0IG'
const apiUri = 'https://api.airtable.com/v0/'
// console.log('apiKey :>> ', apiKey)
// console.log('baseId :>> ', baseId)
// console.log('process.env :>> ', process.env)
// console.log('REACT_APP_API_KEY :>> ', process.env.REACT_APP_API_KEY)
const base = new Airtable({ apiKey: apiKey }).base('appH3uOdlqTnBw0IG')

export function ProvideTasks({ children }) {
    const tasks = useTasksProvider()
    return <airtableContext.Provider value={tasks}>{children}</airtableContext.Provider>
}

function useTasksProvider() {

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // NOTE: I'm using Tasks as the base and Todos as the first table, here:
    const query = `${apiUri}${baseId}/${'Todos'}?api_key=${apiKey}`
    
    const getTasks = async () => {
        const call = await fetch(query)
        const data = await call.json()
        let fields = data.records.map(r => r.fields)
        setTasks(fields as Task[])
        setIsLoading(false)
    }

    const createTask = async (task: Task) => {

        let url = `${apiUri}${baseId}/Todos`
        console.log('url :>> ', url)
        // return fetch(
        //     url,
        //     {
        //         method: 'POST',
        //         mode: 'cors',
        //         cache: 'no-cache',

        //         headers: {
        //             Authorization: `Bearer ${apiKey}`,
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(task)
        //     }
        // )
        //     .then((response) => response.json())
        //     .then(data => console.log(data))

        // const config = {
        //     headers: { Authorization: `Bearer ${apiKey}` }
        // }

        // Axios.post(
        //     'http://localhost:8000/api/v1/get_token_payloads',
        //     task,
        //     config
        // ).then(console.log).catch(console.log);

        // base('Todos').create([
        //     {
        //         'fields': {
        //             ...task
        //         }
        //     }
        // ], (err, records) => {
        //     if (err) {
        //         console.error(err)
        //         return
        //     }
        //     records.forEach(function (record) {
        //         console.log(record.getId())
        //     })
        // })
    }

    useEffect(() => {
        if (!apiKey || !baseId) {
            console.warn('Invalid api keys, could not fetch any Airtable data')
            return
        }

        getTasks().catch(console.error)

    }, [])

    return {
        tasks,
        isLoading,

        createTask,
    }
}