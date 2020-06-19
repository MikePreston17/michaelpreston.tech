import { Box } from '@material-ui/core'
import { ZeitCard, ZeitContainer } from '../components'
import Routes from '../constants/routes'
import Link from 'next/link'
import Landing from './landing'

const Layout = () => {
    return (
        <Box height="100%"
            alignItems="center"
        >
            {/* Navbar here */}
            <Box
                height="100%"
                alignItems="center"
            >
                <Landing />
                <br />
                <Link href="/about">
                    <a>About</a>
                </Link>
                <br />
                <Link href="/landing">
                    <a>Home</a>
                </Link>

            </Box>
            <style jsx>{`            
            #logo {
                margin-top: -180px;
                position: absolute;
                top: 0;
                left: 0;
                color: white;
                font-size: 120%;
                font-family: 'Monda';
            }

            .hero h1 {
                margin: 10px;
            }

            .hero h1 {
                margin-top: 178px;
                text-transform: uppercase;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                font-size: 26px;
                letter-spacing: 4px;
                color: white;
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
            
            `}
            </style>
        </Box>
    )
}

export default Layout;