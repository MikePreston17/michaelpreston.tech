import React, { useContext, createContext, useState, useEffect } from 'react'
import { Teammate, About } from '../models';
import Airtable from 'airtable'
// import { toDto, GenericFactory } from '../models';
import { Technology, Teammate } from '../models/Airtable';
import { createInstance, mapToDto } from '../models/domain';

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_RESUME_BASE;
const apiUri = `https://api.airtable.com/v0/`
const base = new Airtable({ apiKey }).base(baseId)

const airtableContext = createContext(null);

export const useAirtable = () => useContext(airtableContext);

export function ProvideAirtableApi({ children }) {
    const projects = useAirtableProvider();
    return <airtableContext.Provider value={projects}>{children}</airtableContext.Provider>
}

const readQuery = (baseName = null) => `${apiUri}${baseId}/${baseName}?api_key=${apiKey}`;

function useAirtableProvider() {

    const [projects, setProjects] = useState([])
    const [teammates, setTeammates] = useState([]);
    const [about, setAbout] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [skills, setSkills] = useState([]);

    if (!apiKey || !baseId)
        console.warn('Invalid api keys, could not fetch any Airtable data');

    const fetchProjects = async () => {
        const call = await fetch(readQuery('Projects'))
        const data = await call.json();
        setProjects(data.records.fields)
    }

    const fetchTeammates = async () => {
        const data = await getTable('Teammates')
        setTeammates(mapToDto(data.records.fields, Teammate))
    }

    const fetchAbout = async () => {
        const data = await getTable('About')
        setAbout(mapToDto(data.records.fields, About))
    }

    const fetchTechnologies = async () => {
        const data = await getTable('Technologies')
        setTechnologies(mapToDto(data.records.fields, Technology));
    }

    const fetchSkills = async () => {
        const data = await getTable('Skills')
        let technologies = mapToDto(data.records.fields, Technology);
        setTechnologies(technologies);
    }

    const getTable = async (tableName: string) =>
        (await fetch(readQuery(tableName))).json();

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
    }, []);

    // Pass back any results you want
    return {
        projects,
        teammates,
        about,
        technologies,
        fetchSkills,
    }
}