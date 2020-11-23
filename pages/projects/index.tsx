import { Routes } from '../../constants/routes'
import { useAirtable } from '../../hooks/useAirtable'
import { Stack, Heading, Spinner, Button, Box } from '@chakra-ui/core'
import Link from 'next/link'
import { Project } from '../../models'
import { FC } from 'react'
import { EntryList } from '../../components/molecules'

export const Projects = () => {
    let { projects } = useAirtable()

    // let myProjects = projects.length === 0
    //     ? sampleProjects
    //     : projects.sort((a, b) => a.fields.order - b.fields.order) || [];

    // console.info(`Loaded ${projects.length} project entries!: `)

    return (
        <Stack
            alignItems="center"
        >
            {!projects
                ? <Spinner color="upstack.teal.500" />
                : <EntryList entries={projects} />}

        </Stack>
    )
}

// type Props = {
//     entries: Project[]
// }

// const Series: FC<Props> = ({ entries }) => {

//     return (
//         <div>
//             {!!entries && entries.map((entry, key) =>
//                 <ProjectCard key={key} project={entry} />)}
//         </div>
//     )

// }

export default Projects


// let sampleProjects: Project[];
// sampleProjects = [
//     {
//         Name: "Kiyap",
//         Media: [""],
//         Website: "http://www.kiyapp.herokuapp.com",
//         Description: "Find your local sifu!",
//         Repository: "http://www.github.com/mikepreston17/kiyap",
//         Tech: ["React", "Typescript", "NextJS", "Firebase", "Google Maps"],
//         Contributors: [
//             {
//                 Name: "Braden Preston",
//                 GitHub: "http://www.github.com/bpfilmsinc",
//                 LinkedIn: "",
//                 Portfolio: "",
//                 Email: "bpfilmsinc@gmail.com",
//             },
//         ],
//     },
//     {
//         Name: "TPOT Toolbox",
//         Media: [""],
//         Website: "http://www.tpot-toolbox.netlify.com",
//         Description: "A WYSIWYG Letters editor",
//         Repository: "http://www.github.com/harvesthavenapps/tpot-next",
//         Tech: ["React", "Typescript", "NextJS", "Firebase", "chakra-ui", "mobx"],
//         Contributors: [
//             {
//                 Name: "Braden Preston",
//                 GitHub: "http://www.github.com/bpfilmsinc",
//                 LinkedIn: "",
//                 Portfolio: "",
//                 Email: "bpfilmsinc@gmail.com",
//             },
//         ],
//     }
// ]
