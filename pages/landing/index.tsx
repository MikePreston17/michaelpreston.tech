import React from 'react'
import Link from 'next/link'
import { Box, Stack, Button, Spinner } from '@chakra-ui/core'
const linkedInUrl = 'https://www.linkedin.com/in/michael-n-preston/'
import Routes from '../../constants/routes'
import { AiOutlineLinkedin } from 'react-icons/ai'
// import { SlantedNavbar } from '../../components'

export const Landing = () => {

    return (
        <div>
            {/* <Spinner color="upstack.blue.500" /> */}
            {/* <SlantedNavbar /> */}
            <Stack>
                <section className={'hero container'}>

                    <Box id="#logo">MICHAEL PRESTON</Box>

                    <h1>
                        Full Stack Design <br></br> <span> PORTFOLIO</span>
                    </h1>

                    <Box className="button-stack">
                        <Button
                            leftIcon='add'
                            bg="kiyap.sushi.500"
                            color="kiyap.cream.500"
                            // className="btn1"
                            title="Check out my Projects!"
                        >
                            <Link href={Routes.PROJECTS}>
                                <a>Portfolio</a>
                            </Link>
                        </Button>

                        <Button
                            bg="kiyap.cream.200"
                            color="linkedIn.blue.500"
                            className="btn2" title="Connect with me on LinkedIn!"
                        >
                            <a href={linkedInUrl}
                                target="blank">
                                Connect on
                            </a>
                            <AiOutlineLinkedin size={32} />
                        </Button>
                    </Box>
                </section>

                <style jsx>
                    {`
                    span: {
                        fontSize: "65px",
                        "letter-spacing": "2px",
                        "font-family": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                    }

                    .hero h1 {
                        margin: 10px;
                    }

                    .hero h1 {
                        margin-top: 178px;
                        text-transform: uppercase;
                        font-family: Impact, Haettenschweiler, "Arial Narrow Bold",
                        sans-serif;
                        font-size: 26px;
                        letter-spacing: 4px;
                        color: black;
                        z-index: -50;
                    }

                    .button-stack {
                        font-family: Tahoma;
                        font-weight: normal;
                        font-size: 12px;
                        margin-top: 40px;
                    }

                    .btn1:hover {
                        text-decoration: none;
                        color: white;
                    }

                    .btn2:hover {
                        text-decoration: none;
                        color: black;
                    }

                    .btn1 {
                        padding: 12px 25px;
                        background: #f20c4a;
                        text-decoration: none;
                        color: white;
                        border-top-left-radius: 20px;
                        border-bottom-left-radius: 20px;
                    }

                    .btn2 {
                        padding: 12px 25px;
                        background: #f4f6f8;
                        text-decoration: none;
                        color: #000;
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                    .span {
                        fontSize: '65px',
                        'letter-spacing': '2px',
                        'font-family': 'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif',
                    },
                `}
                </style>
            </Stack>
        </div>
    )
}

export default Landing