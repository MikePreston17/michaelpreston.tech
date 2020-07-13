import React, { useContext, createContext, useState, useEffect } from 'react'
import { SoftSkill, Teammate, Project, Technology, About, mapToDto } from '../models';

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_RESUME_BASE;
const apiUri = `https://api.airtable.com/v0/`

const airtableContext = createContext(null);

export const useAirtable = () => useContext(airtableContext);

export function ProvideAirtableApi({ children }) {
    const projects = useAirtableProvider();
    return <airtableContext.Provider value={projects}>{children}</airtableContext.Provider>
}

const readQuery = (baseName = null) => `${apiUri}${baseId}/${baseName}?api_key=${apiKey}`;
const getTable = async (tableName: string) =>
    (await fetch(readQuery(tableName))).json();

// const fetchTable = <T>(tableName: string):T[] => {
//     //     // const data = await getTable(tableName);
//     //     return null;
// }


function useAirtableProvider() {

    const [projects, setProjects] = useState([])
    const [teammates, setTeammates] = useState([]);
    const [about, setAbout] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [softSkills, setSoftSkills] = useState([])

    if (!apiKey || !baseId)
        console.warn('Invalid api keys, could not fetch any Airtable data');

    const fetchProjects = async () => {
        const call = await fetch(readQuery('Projects'))
        const data = await call.json();
        let fields = data.records.map(r => r.fields);
        setProjects(mapToDto(fields, Project))
    }

    const fetchTeammates = async () => {
        const call = await fetch(readQuery('Teammates'));
        const data = await call.json();
        let fields = data.records.map(r => r.fields);
        setTeammates(mapToDto(fields, Teammate))
    }

    const fetchAbout = async () => {
        const call = await fetch(readQuery('About'));
        const data = await call.json();
        let fields = data.records.map(r => r.fields);
        setAbout(mapToDto(fields, About))
    }

    const fetchTechnologies = async () => {
        const data = await getTable('Technologies')
        let fields = data.records.map(r => r.fields);
        let technologies = mapToDto(fields, Technology);
        setTechnologies(technologies);
    }

    const fetchSoftSkills = async () => {
        const data = await getTable('SoftSkills');
        let fields = data.records.map(r => r.fields);
        let softSkills = mapToDto(fields, SoftSkill);
        setSoftSkills(softSkills);
    }



    // Initialize here
    useEffect(() => {
        fetchProjects()
            .catch(console.info)
        fetchTeammates()
            .catch(console.info)
        fetchAbout()
            .catch(console.info)
        fetchTechnologies()
            .catch(console.info)
        fetchSoftSkills()
            .catch(console.info)
    }, []);

    // Pass back any results you want
    return {
        projects,
        teammates,
        about,
        technologies,
        softSkills,

        fetchTechnologies
    }
}