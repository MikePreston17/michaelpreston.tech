import React from 'react'
import { ProvideProjects } from '../hooks'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import customTheme from '../themes'

const CustomApp = (props) => {

    const taskBaseId = process.env.REACT_APP_AIRTABLE_TASKS_BASE;

    const endpoint = process.env.REACT_APP_API_KEY;
    console.log('endpoint :>> ', endpoint);
    console.log('taskBaseId :>> ', taskBaseId);
    
    const firebaseAPIkey = process.env.REACT_APP_API_KEY;
    console.log('firebaseAPIkey :>> ', firebaseAPIkey);

    console.log('process.env.REACT_APP_API_KEY :>> ', process.env.REACT_APP_API_KEY);

    console.log('process.env.AIRTABLE_API_KEY :>> ', process.env.REACT_APP_AIRTABLE_API_KEY);
    console.log('process.env.REACT_APP_AIRTABLE_RESUME_BASE :>> ', process.env.REACT_APP_AIRTABLE_RESUME_BASE);

    console.log('process.env.REACT_APP_API_KEY :>> ', process.env.REACT_APP_API_KEY);

    console.log('process.env.REACT_APP_AIRTABLE_TASKS_BASE :>> ', process.env.REACT_APP_AIRTABLE_TASKS_BASE);

    let { Component, pageProps } = props
    // console.log('pageProps :>> ', pageProps);
    return (
        <ThemeProvider theme={customTheme}>
            <ProvideProjects>
                <Component {...pageProps} />
            </ProvideProjects>
        </ThemeProvider>
    )
}

export default CustomApp;