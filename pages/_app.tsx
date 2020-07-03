import React from 'react'
import { ProvideProjects } from '../hooks'

const CustomApp = (props) => {

    let { Component, pageProps } = props
    // console.log('pageProps :>> ', pageProps);
    return (
        <ProvideProjects>
            <Component {...pageProps} />
        </ProvideProjects>
    )
}

export default CustomApp;