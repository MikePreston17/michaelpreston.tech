import React from 'react'
import { ProvideProjects } from '../hooks'
import { ThemeProvider } from '@chakra-ui/core'
import { customTheme } from '../constants'


const CustomApp = (props) => {

    let { Component, pageProps } = props
    // console.log('pageProps :>> ', pageProps);
    return (
        // <ThemeProvider theme={customTheme}>
            <ProvideProjects>
                <Component {...pageProps} />
            </ProvideProjects>
        // </ThemeProvider>
    )
}

export default CustomApp;