import { ChakraProvider, Box, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Skills } from './components/Skills'
import { AIAutomationSkills } from './components/AIAutomationSkills'
import { DevelopmentProcess } from './components/DevelopmentProcess'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box minH="100vh" bg="gray.50" _dark={{ bg: 'gray.900' }} w="100%">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <AIAutomationSkills />
        <Projects />
        <DevelopmentProcess />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
