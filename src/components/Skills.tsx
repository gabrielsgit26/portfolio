import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  useColorModeValue,
  Progress,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { AnimatedTechBackground } from './AnimatedTechBackground'

const MotionBox = motion(Box)

const coreTech = [
  { name: 'React / Next.js', percent: 95, note: 'Expert • Web platforms' },
  { name: 'Python / FastAPI', percent: 92, note: 'Expert • APIs & AI services' },
  { name: 'TypeScript', percent: 90, note: 'Advanced • Full-stack typing' },
  { name: 'Node.js', percent: 88, note: 'Advanced • Services & tooling' },
]

const specialized = [
  { name: 'AI Agents & Automation', percent: 90 },
  { name: 'AWS / Azure', percent: 85 },
  { name: 'PostgreSQL / MongoDB', percent: 88 },
]

export const Skills = () => {
  const { t } = useTranslation()
  const bg = useColorModeValue('#f8fafc', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const muted = useColorModeValue('gray.600', 'gray.400')
  const trackBg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box as="section" py={{ base: 20, md: 24 }} position="relative" bg={bg} id="skills" overflow="hidden">
      <AnimatedTechBackground />
      <Container maxW="1280px" px={{ base: 4, md: 8 }} position="relative" zIndex={1}>
        <VStack spacing={4} textAlign="center" mb={14}>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="800"
            letterSpacing="-0.02em"
            bgGradient="linear(to-r, brand.600, purple.500)"
            bgClip="text"
          >
            Technical Expertise
          </Heading>
          <Text color={muted} maxW="720px" fontSize="lg">
            Deep hands-on experience across frontend frameworks, backend APIs, AI automation, databases, and cloud platforms—with measurable proficiency across the stack.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} w="100%">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <VStack
              align="stretch"
              spacing={6}
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              border="1px solid"
              borderColor={borderColor}
              shadow="sm"
            >
              <Heading size="md">Core Technologies</Heading>
              {coreTech.map((row) => (
                <Box key={row.name}>
                  <Flex justify="space-between" align="baseline" mb={1} gap={4}>
                    <Text fontWeight="semibold">{row.name}</Text>
                    <Text fontSize="sm" color="brand.600" fontWeight="bold">
                      {row.percent}%
                    </Text>
                  </Flex>
                  <Text fontSize="xs" color={muted} mb={2}>
                    {row.note}
                  </Text>
                  <Progress
                    value={row.percent}
                    size="sm"
                    rounded="full"
                    colorScheme="brand"
                    bg={trackBg}
                  />
                </Box>
              ))}
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <VStack
              align="stretch"
              spacing={6}
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              rounded="2xl"
              border="1px solid"
              borderColor={borderColor}
              shadow="sm"
            >
              <Heading size="md">Specialized Skills</Heading>
              {specialized.map((row) => (
                <Box key={row.name}>
                  <Flex justify="space-between" mb={2}>
                    <Text fontWeight="medium">{row.name}</Text>
                    <Text fontSize="sm" color={muted}>
                      {row.percent}%
                    </Text>
                  </Flex>
                  <Progress
                    value={row.percent}
                    size="sm"
                    rounded="full"
                    colorScheme="purple"
                    bg={trackBg}
                  />
                </Box>
              ))}
              <Box pt={2}>
                <Text fontSize="sm" color={muted} fontWeight="medium" mb={2}>
                  {t('skills.title')}
                </Text>
                <Text fontSize="sm" color={muted} lineHeight="tall">
                  Also fluent across Vue, Angular, mobile (React Native / Flutter), PHP, Ruby, Rust, and enterprise IT leadership when projects demand it.
                </Text>
              </Box>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
