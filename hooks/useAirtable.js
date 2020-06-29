import React, { useContext, createContext, useState, useEffect } from 'react'
import { Teammate, About } from '../models';
import Airtable from 'airtable'

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_RESUME_BASE;
const apiUri = `https://api.airtable.com/v0/`
const base = new Airtable({apiKey}).base(baseId)

const airtableContext = createContext();

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

    if (!apiKey || !baseId)
        console.warn('Invalid api keys, could not fetch any Airtable data');

    const fetchProjects = async () => {
        const call = await fetch(readQuery('Projects'));
        const data = await call.json();
        console.log('data.records.projects :>> ', data.records);
        setProjects(data.records)
    }

    const fetchTeammates = async () => {
        const call = await fetch(readQuery('Teammates'));
        const data = await call.json();
        console.log('data.records.teammates :>> ', data.records);

        // const typed = data.records.map((r) => Object.assign(new Teammate, r.fields));
        // console.log('typed :>> ', typed);
        setTeammates(data.records)
    }

    const fetchAbout = async () => {
        const call = await fetch(readQuery('About'));
        const data = await call.json();
        console.log('data.records.about :>> ', data.records);
        const typed = data.records.map((r) => Object.assign(new About, r.fields));
        console.log('typed :>> ', typed);
        setAbout(data.records)
    }

    // Initialize here
    useEffect(() => {
        fetchProjects();
        fetchTeammates();
        fetchAbout();
    }, []);

    // Pass back any results you want
    return {
        projects,
        teammates,
        about,
    }
}