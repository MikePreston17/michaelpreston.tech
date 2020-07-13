// import { ZeitCard, ZeitContainer, SlantedNavbar } from '../components'
import { Stack, Box, Flex } from '@chakra-ui/core'
import { About } from './about'
import { Skills } from './skills'
import { Projects } from './projects'
import { Contact } from './contact'
import { Card } from '../components'

const Layout = () => {
    return (
        <Box   
            // alignItems="center"
            height="100%"
            border="3px dodgerblue solid"
        >
            <Projects />
            <Skills />
            {/* <About /> */}
            {/* <Contact /> */}
        </Box>
    )
}

{/* Sample tech card: */ }

{/* <Card>
    {{
        header: "Woof!",
        // media: <img src="https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg" />,
        content: (
            <p>The Shiba Inu is the smallest of the six original ...</p>
        ),
        actions: (
            <>
                <button>Like</button>
                <button>Share</button>
            </>
        ),
    }}
</Card> */}


export default Layout;