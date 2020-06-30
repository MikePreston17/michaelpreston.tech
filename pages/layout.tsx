// import { ZeitCard, ZeitContainer, SlantedNavbar } from '../components'
import Routes from '../constants/routes'
import Link from 'next/link'
import Landing from './landing'
import { Button, Box, Stack } from '@chakra-ui/core'


const Layout = () => {
    return (
        <Stack
            // alignItems="left"
        >
            <Landing />
            {/* variant='solid' uses color. Similar to MUI's variant='contained' */}
            <Box
                w="100%"
                // alignContent='center'
                // alignItems='center'
            >
                <Button
                    bg="upstack.blue.500"
                    color='upstack.cream.500'
                    leftIcon='info-outline'
                >
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </Button>
                <Button
                    bg='upstack.teal.500'
                    color='upstack.cream.500'
                    leftIcon='email'                    
                >
                    <Link href={Routes.CONTACT}>
                        <a>Contact</a>
                    </Link>
                </Button>
                <Button
                    bg="upstack.orange.500"
                    color='upstack.cream.500'
                    leftIcon='info-outline'
                    onClick={() => console.info('Redirecting you!')}
                >
                    <Link href={Routes.SKILLS}>
                        <a>Skills</a>
                    </Link>
                </Button>

            </Box>
        </Box>
    )
}

// <style jsx>{`            
// #logo {
//     margin-top: -180px;
//     position: absolute;
//     top: 0;
//     left: 0;
//     color: white;
//     font-size: 120%;
//     font-family: 'Monda';
// }

// .hero h1 {
//     margin: 10px;
// }

// .hero h1 {
//     margin-top: 178px;
//     text-transform: uppercase;
//     font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
//     font-size: 26px;
//     letter-spacing: 4px;
//     color: white;
//     z-index: -50;
// }

// .button {
//     font-family: Tahoma;
//     font-weight: normal;
//     font-size: 12px;
//     margin-top: 40px;
// }

// .btn1:hover {
//     text-decoration: none;
//     color: white;
// }

// .btn2:hover {
//     text-decoration: none;
//     color: black;
// }

// .btn1 {
//     padding: 12px 25px;
//     background: #f20c4a;
//     text-decoration: none;
//     color: white;
//     border-top-left-radius: 20px;
//     border-bottom-left-radius: 20px;

// }

// .btn2 {
//     padding: 12px 25px;
//     background: #f4f6f8;
//     text-decoration: none;
//     color: #000;
//     border-top-right-radius: 20px;
//     border-bottom-right-radius: 20px;

// }

// `}
// </style>

export default Layout;