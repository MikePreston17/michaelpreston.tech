import React from 'react';
import { Tooltip, Button, Box, Stack, Heading, Text, Spinner, FormControl, Icon, FormLabel, Input, FormHelperText, RadioGroup, Radio } from '@chakra-ui/core'
import Link from 'next/link'
import { Routes } from '../../constants/routes';
import { ContactForm } from 'components/organisms';

const myEmail = `michael.n.preston@gmail.com`
const myPhone = `(817) 565-2372`

export const Contact = () => {

    return (
        <div className='alignLeft'>
            <Heading isTruncated>
                Contact Me!
            </Heading>
            <Box>
                <Stack>
                    <ContactForm />
                    {/* <Link href={Routes.HOME}><a>Go Home</a></Link> */}
                </Stack>
            </Box>
        </div>
    )
}


// var clipboard = new ClipboardJS('.btn');
// clipboard.destroy(); //TODO: Use in componentWillUnmount or destructor.

// export default withStyles(styles)(Contact)
export default Contact;
