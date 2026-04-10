import { Box, Flex, Button, Progress, Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack, useBreakpointValue } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link as ScrollLink } from 'react-scroll'
import { useState, useEffect } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const { t } = useTranslation()
  const hoverBg = useColorModeValue('gray.100', 'gray.700')
  const navBorderColor = useColorModeValue('gray.200', 'gray.800')
  // const { colorMode, toggleColorMode } = useColorMode()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setScrollProgress(currentProgress)

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'ai-automation', 'projects', 'process', 'games']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav.about'), to: 'about' },
    { label: t('skills.title'), to: 'skills' },
    { label: 'AI Automation', to: 'ai-automation' },
    { label: t('nav.projects'), to: 'projects' },
    { label: 'Process', to: 'process' },
    { label: t('nav.games'), to: 'games' },
  ]

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      // bg={navBg}
      backdropFilter="blur(12px)"
      _dark={{ borderBottom: '1px', borderColor: 'gray.800', boxShadow: 'none' }}
      borderBottom="1px"
      borderColor={navBorderColor}
      zIndex={1000}
      py={4}
      boxShadow={'sm'}
    >
      <Progress
        value={scrollProgress}
        size="xs"
        colorScheme="brand"
        position="absolute"
        top="0"
        left="0"
        right="0"
        borderRadius="0"
      />
      <Flex
        maxW={{ base: "100%", md: "1280px" }}
        w="100%"
        mx="auto"
        px={{ base: 4, md: 8 }}
        justify="space-between"
        align="center"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          bgGradient="linear(to-r, brand.500, brand.700)"
          bgClip="text"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Gabriel Rios
        </Text>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              onClick={onOpen}
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent bg={"white"} _dark={{ bg: 'gray.900' }}>
                <DrawerCloseButton />
                <DrawerBody>
                  <VStack spacing={4} mt={12} align="start">
                    {navLinks.map((item) => (
                      <ScrollLink
                        key={item.label}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={onClose}
                      >
                        <Button
                          variant="ghost"
                          color={activeSection === item.to ? 'brand.500' : undefined}
                          fontWeight={activeSection === item.to ? 'bold' : 'normal'}
                          w="100%"
                          justifyContent="flex-start"
                          _hover={{ bg: hoverBg, color: 'brand.500' }}
                          cursor="pointer"
                          transition="all 0.2s"
                        >
                          {item.label}
                        </Button>
                      </ScrollLink>
                    ))}
                    {/* <IconButton
                      aria-label="Toggle color mode"
                      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                      onClick={toggleColorMode}
                      variant="ghost"
                      size="md"
                    /> */}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Flex gap={4} align="center">
            {navLinks.map((item) => (
              <ScrollLink
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Button
                  variant="ghost"
                  color={activeSection === item.to ? 'brand.500' : undefined}
                  fontWeight={activeSection === item.to ? 'bold' : 'normal'}
                  _hover={{ bg: hoverBg, color: 'brand.500' }}
                  cursor="pointer"
                  transition="all 0.2s"
                >
                  {item.label}
                </Button>
              </ScrollLink>
            ))}
            {/* <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="md"
            /> */}
          </Flex>
        )}
      </Flex>
    </Box>
  )
} 