// import { ZeitCard, ZeitContainer, SlantedNavbar } from '../components'
import Routes from '../constants/routes'
import Link from 'next/link'
import Landing from './landing'
import { Button, Box, Stack } from '@chakra-ui/core'


const Layout = () => {
    return (
        <Stack >
            <Landing/>
            <Box
                w='100%'
            >
                STuff in the box

            </Box>


        </Stack>


    )
}

export default Layout;