import React from 'react';
import { Tooltip, Button, Box, Stack, Heading, Text, Spinner, FormControl, Icon, FormLabel, Input, FormHelperText, RadioGroup, Radio } from '@chakra-ui/core'
import Link from 'next/link'
import { Routes } from '../../constants/routes';
import { ContactForm } from '../../components'

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

                    {/* <Text>Mobile: {phone}</Text>
                    <Text>Email: {email}</Text> */}


                    {/* <Tooltip title="Shoot me an Email!">
                        <Button href={'mailto:' + email}>
                            <Icon className="far fa-envelope-open" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Let's Connect!">
                        <Button href="https://www.linkedin.com/in/michael-n-preston/">
                            <Icon className="fab fa-linkedin" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Copy to clipboard">
                        <Button data-clipboard-text={email}>
                            <Icon className="fas fa-clipboard" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Download my Resume!">
                        <Button download href="/content/Michael Preston - Resume 2019 Full Stack Engineer.docx">
                            <Icon className="fas fa-download" />
                        </Button>
                    </Tooltip> */}
                    
                    <Link href={Routes.HOME}><a>Go Home</a></Link>
                </Stack>
            </Box>
        </div>
    )
}


// var clipboard = new ClipboardJS('.btn');
// clipboard.destroy(); //TODO: Use in componentWillUnmount or destructor.

// export default withStyles(styles)(Contact)
export default Contact;
