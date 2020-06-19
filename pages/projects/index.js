import { useContext } from 'react'
import { EntryContext } from '../../contexts/EntryContext'
import EntryList from '../../components/EntryList'
import { useProjects } from '../../hooks/useProjects'

const Projects = () => {

    // window?.localStorage?.getItem('projects')
    let projects = useProjects();
    // console.log('projects :>> ', projects);   

    console.info(`Loaded ${projects.length} project entries!: `)    
    let sortedEntries = projects.sort((a, b) => a.fields.order - b.fields.order) || []     

    return (
        <>
            <h3><u>Projects</u></h3>
            <EntryList entries={sortedEntries} />
        </>
    )
    // return (<div>
    //     {!!projects ?
    //         <div>{projects.length}</div>
    //         : <UnderConstruction message="No projects :'(" />}
    // </div>)
    // const context = useContext(EntryContext);
    // // (
    // // <EntryContext.Consumer>
    // // {(context) => {


    
    // // }}
    // // </EntryContext.Consumer>
    // // )
}

export default Projects