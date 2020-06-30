import React from 'react'
import { ProvideProjects } from '../hooks'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { customTheme } from '../constants'


const CustomApp = (props) => {

    let { Component, pageProps } = props
    // console.log('pageProps :>> ', pageProps);
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <ProvideProjects>
                <Component {...pageProps} />
            </ProvideProjects>
        </ThemeProvider>
    )
}

export default CustomApp;