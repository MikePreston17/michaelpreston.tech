import { Box } from '@material-ui/core'
import { ZeitCard, ZeitContainer } from '../components'
import Routes from '../constants/routes'
import Link from 'next/link'

const Layout = () => {
    return (
        <Box height="100%"
            alignItems="center"
        >
            <h1>Hello Next.js 👋</h1>
            <Box
                height="100%"
                alignItems="center"
            >

                <Link href="/dummy">
                    <a>Dummy</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/">
                    <a>Home</a>
                </Link>

            </Box>
            {/* <ZeitContainer>
                <ZeitCard
                    url={Routes.ABOUT}
                    // title={Routes["ABOUT"]}
                    title="About"
                />
            </ZeitContainer> */}
            {/* <ZeitContainer>
                <ZeitCard
                    url="/"
                    title="Home"
                />
            </ZeitContainer>
            <ZeitContainer>
                <ZeitCard
                    url="/"
                    title="Home"
                />
            </ZeitContainer> */}

        </Box>
    )
}

export default Layout;