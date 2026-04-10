import { Box, Container, Heading, Text, VStack, SimpleGrid, useColorModeValue, Flex, Circle } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const phases = [
  {
    title: 'Ideation & Planning',
    steps: [
      'Requirements discovery and technical scoping',
      'Architecture and stack selection',
      'Roadmap, milestones, and risk assessment',
    ],
  },
  {
    title: 'Development',
    steps: [
      'Iterative delivery with clean, reviewable commits',
      'Automated testing and continuous integration',
      'API design, integrations, and performance tuning',
    ],
  },
  {
    title: 'Launch & Growth',
    steps: [
      'Production deployment and observability',
      'Security hardening and operational runbooks',
      'Iteration based on metrics and user feedback',
    ],
  },
]

export const DevelopmentProcess = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const border = useColorModeValue('gray.200', 'gray.700')
  const muted = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box as="section" id="process" py={{ base: 20, md: 24 }} bg={bg}>
      <Container maxW="1280px" px={{ base: 4, md: 8 }}>
        <VStack spacing={4} textAlign="center" mb={14}>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            Development Process
          </Heading>
          <Text color={muted} maxW="720px" fontSize="lg">
            A structured approach to shipping reliable software—from discovery through production and iteration.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {phases.map((phase, i) => (
            <MotionBox
              key={phase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <VStack
                align="stretch"
                spacing={5}
                bg={cardBg}
                border="1px solid"
                borderColor={border}
                rounded="2xl"
                p={8}
                shadow="sm"
                h="100%"
                _hover={{ shadow: 'md', borderColor: 'brand.300' }}
                transition="all 0.2s"
              >
                <Flex align="center" gap={3}>
                  <Circle size="40px" bg="brand.500" color="white" fontWeight="bold" fontSize="sm">
                    {i + 1}
                  </Circle>
                  <Heading as="h3" size="md">
                    {phase.title}
                  </Heading>
                </Flex>
                <VStack align="start" spacing={3}>
                  {phase.steps.map((step) => (
                    <Flex key={step} gap={2} align="start">
                      <Box mt={2} w={1.5} h={1.5} rounded="full" bg="brand.400" flexShrink={0} />
                      <Text color={muted} fontSize="sm" lineHeight="tall">
                        {step}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
