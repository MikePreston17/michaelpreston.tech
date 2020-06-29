import ProjectList from '../../components/EntryList'
import { useAirtable } from '../../hooks/useAirtable'

const Projects = () => {

    let { projects } = useAirtable();

    console.info(`Loaded ${projects.length} project entries!: `)
    let sortedEntries = projects.sort((a, b) => a.fields.order - b.fields.order) || []

    return (
        <>
            <h3><u>Projects</u></h3>
            <ProjectList entries={sortedEntries} />
        </>
    )
}

export default Projects