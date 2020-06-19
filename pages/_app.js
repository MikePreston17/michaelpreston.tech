import React from 'react'
import App from 'next/app'
import { ProvideProjects } from '../hooks/useProjects'

const CustomApp = (props) => {    

    let { Component, pageProps } = props    
    return (
        <ProvideProjects>
            <h1>Hello from _App!</h1>
            <Component {...pageProps} />
        </ProvideProjects>
    )
}

export default CustomApp;