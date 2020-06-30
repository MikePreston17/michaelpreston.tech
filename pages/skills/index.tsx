
import { FC } from 'react';
import { Heading, Button, List, Link, ListItem, Box, Stack } from '@chakra-ui/core';
import NextLink from 'next/link'
import { useAirtable } from '../../hooks/useAirtable';

const disclaimer = `All usage times are estimates and may or may not include professional experience, but will certainly include time I used researching and trying out technologies with proof-of-concept websites.  I consider all relevant experience as  experience and wish to work with those who are willing to take a chance on software developers who demonstrate their potential and willingness to learn.`

export const Skills = () => {
    const { technologies } = useAirtable();
    console.log('technologies :>> ', technologies);
    return (
        <Stack spacing={6} px={16} py={8} maxW={960}>
            <Heading>My Skills</Heading>
            <Box alignContent='left'
                justifyContent='left'
            >
                <i>{disclaimer}</i>
            </Box>
            <List styleType="disc">
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </List>
            {/* Link href isn't recognized, see https://chakra-ui.com/link */}
            {/* something like this? */}
            {/* <Link as={NextLink} to="/">
                    <a>Home</a>
                </Link> */}
            <Stack direction="row" spacing={2}>
                <Button
                    bg="blue.500"
                    color='white'
                    leftIcon='typescript'
                >
                    <Link href="/">Typescript</Link>
                </Button>
                <Button
                    bg="upstack.orange.500"
                    color='upstack.cream.500'
                    leftIcon='arrow-right'
                >
                    <Link href="/">Home</Link>
                </Button>
            </Stack>
        </Stack>
    )
}

export default Skills
