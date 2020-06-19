import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Link from 'next/link'
const linkedInUrl = 'https://www.linkedin.com/in/michael-n-preston/'
import { ZeitLinkButton, ButtonLink } from '../../components/ZeitLinkButton'
import { Chip } from '@material-ui/core'

const Landing = (props) => {

    return (
        <>
            <section className={'hero container'}>
                <div id="logo">MICHAEL PRESTON</div>
                <h1>
                    Full Stack Design <br></br> <span> PORTFOLIO</span>
                </h1>

                <div className="button">
                    <span className="btn1">
                        <Link
                            href="/projects"
                        >
                            <a>See Portfolio!</a>
                        </Link>
                    </span>
                    {/* Use a special Nextjs link that can route externally */}
                    {/* <ReactLink >
                        <a href="https://www.linkedin.com/in/michael-n-preston/"
                            className="btn2">Connect with me on LinkedIn!</a>
                    </ReactLink> */}
                </div>
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
        </>
    )
}

export default Landing


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