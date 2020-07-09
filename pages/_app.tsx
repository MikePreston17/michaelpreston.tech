import React from 'react'
import { ProvideProjects } from '../hooks'
<<<<<<< HEAD
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import customTheme from '../themes'
=======
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { customTheme } from '../constants'

>>>>>>> 453432f88d3bf7dd347a35bb868e0457f386f14f

const CustomApp = (props) => {

    let { Component, pageProps } = props
    // console.log('pageProps :>> ', pageProps);
    return (
        <ThemeProvider theme={customTheme}>
<<<<<<< HEAD
=======
            <CSSReset />
>>>>>>> 453432f88d3bf7dd347a35bb868e0457f386f14f
            <ProvideProjects>
                <Component {...pageProps} />
            </ProvideProjects>
        </ThemeProvider>
    )
}

export default CustomApp;