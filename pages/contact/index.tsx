import React from 'react';
import { Tooltip, Button, Box, Stack, Heading, Text, Spinner, FormControl, Icon, FormLabel, Input, FormHelperText, RadioGroup, Radio } from '@chakra-ui/core'
import Link from 'next/link'
import { Routes } from '../../constants/routes';
import ZeitLink from '../../components/ZeitLink';
// import Icon from '@material-ui/core/Icon';
// import ListItem from '@material-ui/core/ListItem';

// import Tooltip from '@material-ui/core/Tooltip';
// import Button from "@material-ui/core/Button";
// import ClipboardJS from 'clipboard';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core';

// const styles = theme => ({
//     header: {
//         color: '#fff'
//     },
//     panel: {
//         background: '#fff'
//     },
//     button: {
//         border: '1px solid transparent',
//         color: '#f20c4a',
//         margin: '3px',
//         background: 'paper',
//         'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
//     },
// })

const email = `michael.n.preston@gmail.com`
const phone = `(817) 565-2372`

export const Contact = () => {

    return (
        <div className='alignLeft'>
            <Heading isTruncated>
                Contact Me!
            </Heading>
            <Box>
                <Stack>
                    <Text>Mobile: {phone}</Text>
                    <Text>Email: {email}</Text>

                    <ZeitLink
                        url="https://www.thepathoftruth.com"
                    />
                    <Spinner color="upstack.orange.500" />

                    <FormControl>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input type="email" id="email" aria-describedby="email-helper-text" />
                        <FormHelperText id="email-helper-text">
                            We'll never share your email.
                    </FormHelperText>
                    </FormControl>

                    <FormControl as="fieldset">
                        <FormLabel as="legend">What kinds of technologies are you looking for?</FormLabel>
                        <RadioGroup defaultValue="">
                            <Radio value="Sasuke">Sasuke</Radio>
                            <Radio value="Nagato">Nagato</Radio>
                            <Radio value="Itachi">Itachi</Radio>
                            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
                        </RadioGroup>
                        <FormHelperText id="email-helper-text">
                            Select only
                        </FormHelperText>
                    </FormControl>

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
