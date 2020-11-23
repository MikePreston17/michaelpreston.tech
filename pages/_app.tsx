import React from 'react'
import { ProvideProjects } from '../hooks'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import customTheme from '../themes'
// import { ProvideTasks } from '../hooks/useTasks'

const CustomApp = (props) => {

    let { Component, pageProps } = props

    return (
        <ThemeProvider theme={customTheme}>
            <ProvideProjects>
                {/* <ProvideTasks> */}
                <Component {...pageProps} />
                {/* </ProvideTasks> */}
            </ProvideProjects>
        </ThemeProvider>
    )
}

export default CustomApp