import EntryList from '../../components/EntryList'
import { Routes } from '../../constants/routes';
import { useAirtable } from '../../hooks/useAirtable'
import { Stack, Heading, Spinner, Button, Box } from '@chakra-ui/core';
import Link from 'next/link'

const Projects = () => {

    let { projects } = useAirtable();

    console.info(`Loaded ${projects.length} project entries!: `)
    let sortedEntries = projects.sort((a, b) => a.fields.order - b.fields.order) || []

    return (
        <Stack>
            <Heading><u>Projects</u></Heading>
            <Box>
                {/* <Button variantColor="green">Button1</Button> */}

                <Link href={Routes.HOME}><a>Go Home</a></Link>
                {!projects ? <Spinner color="upstack.teal.500" /> :
                    <EntryList entries={sortedEntries} />}

            </Box>

        </Stack>
    )
}

export default Projects