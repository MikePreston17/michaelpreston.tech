// import { ZeitCard, ZeitContainer, SlantedNavbar } from '../components'
import Routes from '../constants/routes'
import Link from 'next/link'
import Landing from './landing'
import { Button, Box, Stack } from '@chakra-ui/core'
import { SlantedNavbar } from '../components'


const Layout = () => {
    return (
        <Stack >
            <SlantedNavbar />
            <Landing />
        </Stack>
    )
}

export default Layout;