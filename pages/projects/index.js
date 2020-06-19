import EntryList from '../../components/EntryList'
import { useProjects } from '../../hooks/useProjects'

const Projects = () => {

    let projects = useProjects();

    console.info(`Loaded ${projects.length} project entries!: `)    
    let sortedEntries = projects.sort((a, b) => a.fields.order - b.fields.order) || []     

    return (
        <>
            <h3><u>Projects</u></h3>
            <EntryList entries={sortedEntries} />
        </>
    )    
}

export default Projects