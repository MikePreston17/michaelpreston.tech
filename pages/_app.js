import React from 'react'
import App from 'next/app'
import { ProvideProjects } from '../hooks/useProjects'

const CustomApp = (props) => {    

    let { Component, pageProps } = props    
    return (
        <ProvideProjects>
            <Component {...pageProps} />
        </ProvideProjects>
    )
}

export default CustomApp;