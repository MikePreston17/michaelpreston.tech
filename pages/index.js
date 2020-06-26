import PerfectScrollbar from 'react-perfect-scrollbar'
import Layout from './layout'
import { Box, ThemeProvider, ColorModeProvider, Flex, CSSReset, theme } from '@chakra-ui/core'
import customTheme from './theme'

const App = () => {
  return (
    <div title="My Design Portfolio" className="container">
      <main>
        <ThemeProvider theme={customTheme}>
          <ColorModeProvider>
            <Flex direction='column' align='center' justify='center'>
              <CSSReset />
              <PerfectScrollbar>
                <Layout />
              </PerfectScrollbar>
            </Flex>
          </ColorModeProvider>
        </ThemeProvider>
      </main>
    </div>
  )
}

export default App