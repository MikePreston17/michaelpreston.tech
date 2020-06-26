import React, { useContext, createContext, useState, useEffect } from 'react'

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_RESUME_BASE;

const projectContext = createContext();

export const useProjects = () => useContext(projectContext);

export function ProvideProjects({ children }) {
    const projects = useProjectsProvider();
    return <projectContext.Provider value={projects}>{children}</projectContext.Provider>
}

function useProjectsProvider() {
    // console.log('init provider()')
    const [projects, setProjects] = useState([])
    const baseName = 'Projects'
    const apiQuery = `https://api.airtable.com/v0/${baseId}/${baseName}?api_key=${apiKey}`;

    if (!apiKey || !baseId)
        console.warn('Invalid api keys, could not fetch any Airtable data');

    const fetchProjects = async () => {
        console.log('Fetching projects...')
        const call = await fetch(apiQuery);
        const data = await call.json();
        console.log('data.records.projects :>> ', data.records);
        setProjects(data.records)
    }

    // Initialize here
    useEffect(() => {
        fetchProjects();
    }, []);

    // Pass back any results you want
    return projects

}