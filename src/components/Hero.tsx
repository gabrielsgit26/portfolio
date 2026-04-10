import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { AnimatedTechBackground } from './AnimatedTechBackground'

const MotionDiv = motion.div

const stats = [
  { label: 'Years Experience', value: '16+' },
  { label: 'Portfolio Projects', value: '9+' },
  { label: 'Expertise', value: 'Full-Stack' },
  { label: 'Location', value: 'CA, USA' },
]

export const Hero = () => {
  const { t } = useTranslation()
  const textMuted = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const heroBg = useColorModeValue(
    'linear(to-b, white 0%, #f4f4f5 55%, #e4e4e7 100%)',
    'linear(to-b, gray.900 0%, #18181b 50%, gray.900 100%)'
  )
  const glow = useColorModeValue('brand.200', 'brand.900')
  const secondaryGlowOpacity = useColorModeValue(0.25, 0.12)
  const headingColor = useColorModeValue('gray.900', 'white')
  const iconColor = useColorModeValue('gray.700', 'gray.300')
  const iconHoverBg = useColorModeValue('gray.100', 'gray.700')
  const chevronColor = useColorModeValue('brand.600', 'brand.300')

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/gabrielsgit26', label: t('hero.social.github') },
    { icon: FaEnvelope, href: 'mailto:apextechnicalconsulting@gmail.com', label: t('hero.social.telegram') },
    { icon: FaPhone, href: 'tel:+19257277571', label: t('hero.social.skype') },
  ]

  return (
    <Box
      as="section"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 16, md: 24 }}
      bgGradient={heroBg}
      id="hero"
      position="relative"
      overflow="hidden"
    >
      <AnimatedTechBackground />
      <Box position="absolute" top="-20%" right="-10%" w="480px" h="480px" borderRadius="full" bg={glow} opacity={0.22} filter="blur(100px)" pointerEvents="none" zIndex={0} />
      <Box position="absolute" bottom="-15%" left="-5%" w="380px" h="380px" borderRadius="full" bg="gray.200" opacity={secondaryGlowOpacity} filter="blur(90px)" pointerEvents="none" zIndex={0} _dark={{ bg: 'gray.700' }} />

      <Container maxW="1280px" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        <VStack spacing={6} align="center" textAlign="center" maxW="900px" mx="auto">
          <Text
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="brand.600"
            _dark={{ color: 'brand.300' }}
          >
            Hi, I&apos;m
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="extrabold"
            letterSpacing="-0.03em"
            lineHeight="1.05"
            color={headingColor}
          >
            {t('hero.title')}
          </Heading>
          <Heading as="h2" size="lg" fontWeight="600" color={textMuted}>
            Senior Full-Stack &amp; AI Developer
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color={textMuted} lineHeight="tall" maxW="640px">
            {t('hero.subtitle')}
          </Text>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="100%" maxW="800px">
            {stats.map((s) => (
              <Box
                key={s.label}
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
                rounded="xl"
                px={4}
                py={3}
                textAlign="center"
                shadow="sm"
              >
                <Text fontSize="2xl" fontWeight="800" color="brand.600" _dark={{ color: 'brand.300' }}>
                  {s.value}
                </Text>
                <Text fontSize="xs" color={textMuted} fontWeight="500" mt={1}>
                  {s.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <HStack spacing={2}>
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                as="a"
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                variant="ghost"
                size="md"
                rounded="full"
                color={iconColor}
                _hover={{ color: 'brand.500', bg: iconHoverBg }}
              >
                <Icon as={link.icon} boxSize={5} />
              </Button>
            ))}
          </HStack>

          <Box pt={4}>
            <ScrollLink
              to="about"
              smooth
              duration={500}
              offset={-70}
              aria-label="Scroll down to about section"
              style={{ display: 'inline-block', cursor: 'pointer' }}
            >
              <MotionDiv
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon as={FaChevronDown} boxSize={9} color={chevronColor} opacity={0.9} />
              </MotionDiv>
            </ScrollLink>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
