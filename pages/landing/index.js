import React from 'react'
import Link from 'next/link'
import { Box, Stack, Button } from '@chakra-ui/core'
const linkedInUrl = 'https://www.linkedin.com/in/michael-n-preston/'
import Routes from '../../constants/routes'

const Landing = () => {

    return (

        <Stack>
            <section className={'hero container'}>

                <Box id="#logo">MICHAEL PRESTON</Box>

                <h1>
                    Full Stack Design <br></br> <span> PORTFOLIO</span>
                </h1>

                <Box className="button">
                    <Button className="btn1" title="Check out my Projects!">
                        <Link href={Routes.PROJECTS}>
                            <a>Portfolio</a>
                        </Link>
                    </Button>

                    <span className="btn2" title="Connect with me on LinkedIn!">
                        <a href={linkedInUrl}
                            target="blank">
                            LinkedIn
                        </a>
                    </span>
                </Box>
            </section>

            <style jsx>
                {`
            span: {
                fontSize: "65px",
                "letter-spacing": "2px",
                "font-family": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
            }

            #logo {
                margin-top: -180px;
                position: absolute;
                top: 0;
                left: 0;
                color: white;
                font-size: 120%;
                font-family: "Monda";
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

            .button {
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
    )
}

export default Landing



{/* */ }

{/* <Chip
                    className="button"
                    label='Connect with me on LinkedIn!'
                    title={title}
                    component={ButtonLink}
                    href={linkedInUrl}
                    passHref={true}
                    // href='/scribe/edit/[doc]'
                    // as={`/scribe/edit/${id}`}
                    clickable
                /> */}
{/* <Link
                        className="btn1"
                        // href="https://www.linkedin.com/in/michael-n-preston/"
                        path="https://www.linkedin.com/in/michael-n-preston/"
                        as="https://www.linkedin.com/in/michael-n-preston/"
                    >
                        <a
                            path="https://www.linkedin.com/in/michael-n-preston/"

                            className="btn2">Connect on LI!</a>
                    </Link> */}