import React, { useContext, createContext, useState, useEffect } from 'react'
import {
    SoftSkill,
    Teammate,
    Project,
    Technology,
    About,
    mapToDto,
    Task
} from '../models';

import Airtable from 'airtable'

const airtableContext = createContext(null);

/** Airtable Hook */
export const useAirtable = () => useContext(airtableContext);

/** Provider HOC */
export function ProvideAirtableApi({ children }) {
    const projects = useAirtableProvider();
    return <airtableContext.Provider value={projects}>{children}</airtableContext.Provider>
}

const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
const baseId = process.env.REACT_APP_AIRTABLE_RESUME_BASE;
const taskBaseId = process.env.REACT_APP_AIRTABLE_TASKS_BASE;
const apiUri = `https://api.airtable.com/v0/`
// console.log('apiKey :>> ', apiKey);

// const endpoint = process.env.REACT_APP_API_KEY;
// console.log('endpoint :>> ', endpoint);
// console.log('taskBaseId :>> ', taskBaseId);

// const firebaseAPIkey = process.env.REACT_APP_API_KEY;
// console.log('firebaseAPIkey :>> ', firebaseAPIkey);

const firebaseAPIkey = process.env.REACT_APP_API_KEY;
console.log('firebaseAPIkey :>> ', firebaseAPIkey);

console.log('process.env.REACT_APP_API_KEY :>> ', process.env.REACT_APP_API_KEY);

console.log('process.env.AIRTABLE_API_KEY :>> ', process.env.REACT_APP_AIRTABLE_API_KEY);
console.log('process.env.REACT_APP_AIRTABLE_RESUME_BASE :>> ', process.env.REACT_APP_AIRTABLE_RESUME_BASE);

console.log('process.env.REACT_APP_API_KEY :>> ', process.env.REACT_APP_API_KEY);

console.log('process.env.REACT_APP_AIRTABLE_TASKS_BASE :>> ', process.env.REACT_APP_AIRTABLE_TASKS_BASE);


console.log('process.env.AIRTABLE_API_KEY :>> ', process.env.AIRTABLE_API_KEY);


/**Helpers */
export const makeReadQuery = (baseName = null) => `${apiUri}${baseId}/${baseName}?api_key=${apiKey}`; // TODO: Make this inline for now.  Func is not working well here.
export const getTable = async (tableName: string) =>
    (await fetch(makeReadQuery(tableName))).json();

/** API */
function useAirtableProvider() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [about, setAbout] = useState<About[]>([]);
    const [projects, setProjects] = useState<Project[]>([])
    const [teammates, setTeammates] = useState<Teammate[]>([]);
    const [softSkills, setSoftSkills] = useState<SoftSkill[]>([])
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    if (!apiKey || !baseId)
        console.warn('Invalid api keys, could not fetch any Airtable data');

    const getProjects = async () => {
        const call = await fetch(makeReadQuery('Projects'))
        const data = await call.json();
        let fields = data.records.map(r => r.fields);
        setProjects(mapToDto(fields, Project))
    }

    const getTeammates = async () => {
        const call = await fetch(makeReadQuery('Teammates'));
        const data = await call.json();
        let fields = data.records.map(r => r.fields);
        setTeammates(mapToDto(fields, Teammate))
    }

    const getAbout = async () => {
        const call = await fetch(makeReadQuery('About'));
        const data = await call.json();
        let fields = data.records.map(r => r.fields);
        setAbout(mapToDto(fields, About))
    }

    const getTechnologies = async () => {
        const data = await getTable('Technologies')
        let fields = data.records.map(r => r.fields);
        let technologies = mapToDto(fields, Technology);
        setTechnologies(technologies);
    }

    const getSoftSkills = async () => {
        const data = await getTable('SoftSkills');
        let fields = data.records.map(r => r.fields);
        let softSkills = mapToDto(fields, SoftSkill);
        setSoftSkills(softSkills);
    }

    const getTasks = async () => {
        let query = `${apiUri}${taskBaseId}/${'Todos'}?api_key=${apiKey}`
        const call = await fetch(query);
        const data = await call.json();
        let fields = data.records.map(r => r.fields);
        let tasks = mapToDto(fields, Task);
        setTasks(tasks);
    }

    const createTask = async () => {
        let base = new Airtable({ apiKey: apiKey }).base(process.env.AIRTABLE_TASKS_BASE)

        base('Todos').create([
            {
                "fields": {
                    "Title": "Eat a pizza",
                    "Status": "Todo"
                }
            },
            {
                "fields": {
                    "Title": "Make Todo App",
                    "Status": "In progress"
                }
            }
        ], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        });
    }

    // Initialize here
    useEffect(() => {
        console.log('process.env.AIRTABLE_TASKS_BASE :>> ', process.env.AIRTABLE_TASKS_BASE);
        console.log('process.env :>> ', process.env.DUMMY);
        getProjects()
            .catch(console.info)
        getTeammates()
            .catch(console.info)
        getAbout()
            .catch(console.info)
        getTechnologies()
            .catch(console.info)
        getSoftSkills()
            .catch(console.info)
    }, []);

    // Pass back any results you want
    return {
        projects,
        teammates,
        about,
        technologies,
        softSkills,

        getTechnologies,
        getTasks
    }
}