import { Box, Container, Heading, Text, SimpleGrid, VStack, Badge, useColorModeValue, Icon, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaRobot, FaNetworkWired, FaCloud, FaCogs, FaDatabase } from 'react-icons/fa'
import { SiOpenai, SiFastapi, SiN8N } from 'react-icons/si'

const MotionBox = motion(Box)

const aiSkills = [
  {
    title: 'AI Agents',
    description: 'Design and implementation of autonomous agents for workflow execution, decision support, and task orchestration.',
    tags: ['Multi-step Agents', 'Prompt Engineering', 'Tool Calling'],
    icon: FaRobot,
  },
  {
    title: 'Automation Workflows',
    description: 'Build scalable automation pipelines with event-driven actions, integrations, and monitoring.',
    tags: ['n8n', 'Business Logic', 'Task Automation'],
    icon: SiN8N,
  },
  {
    title: 'API Intelligence Layer',
    description: 'FastAPI-based services for AI-enabled endpoints, orchestration, and secure external API integrations.',
    tags: ['FastAPI', 'OpenAPI', 'Python'],
    icon: SiFastapi,
  },
  {
    title: 'AI Integration Architecture',
    description: 'End-to-end architecture connecting LLM services, data systems, and cloud deployments for production use.',
    tags: ['LLM Integrations', 'Cloud Deployments', 'Observability'],
    icon: SiOpenai,
  },
]

const orbitIcons = [FaNetworkWired, FaCloud, FaCogs, FaDatabase]

export const AIAutomationSkills = () => {
  const bg = useColorModeValue('white', 'gray.900')
  const cardBg = useColorModeValue('gray.50', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const orbitColor = useColorModeValue('brand.500', 'brand.300')

  return (
    <Box as="section" id="ai-automation" py={24} bg={bg} position="relative" overflow="hidden">
      <MotionBox
        position="absolute"
        top="-140px"
        left="-120px"
        w="360px"
        h="360px"
        borderRadius="full"
        bg={useColorModeValue('cyan.100', 'cyan.900')}
        filter="blur(80px)"
        opacity={0.25}
        animate={{ x: [0, 30, -15, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionBox
        position="absolute"
        right="-140px"
        bottom="-140px"
        w="400px"
        h="400px"
        borderRadius="full"
        bg={useColorModeValue('purple.100', 'purple.900')}
        filter="blur(90px)"
        opacity={0.25}
        animate={{ x: [0, -25, 20, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container maxW={{ base: '100%', md: '1280px' }} px={{ base: 4, md: 8 }} position="relative">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="brand" px={3} py={1} borderRadius="full">AI Automation</Badge>
            <Heading as="h2" size="xl" bgGradient="linear(to-r, brand.500, cyan.400)" bgClip="text">
              AI Automation Technical Skills
            </Heading>
            <Text maxW="780px" color={textColor}>
              Production-focused capabilities across intelligent agents, workflow orchestration, API intelligence, and cloud-scale automation systems.
            </Text>
          </VStack>

          <Box position="relative" w="100%" maxW="860px" h="130px">
            {orbitIcons.map((OrbitIcon, index) => (
              <MotionBox
                key={`orbit-${index}`}
                position="absolute"
                top="50%"
                left="50%"
                style={{ translateX: '-50%', translateY: '-50%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12 + index * 2, repeat: Infinity, ease: 'linear' }}
              >
                <MotionBox
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12 + index * 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Box transform={`translateX(${130 + index * 45}px)`}>
                    <Icon as={OrbitIcon} boxSize={8} color={orbitColor} opacity={0.8} />
                  </Box>
                </MotionBox>
              </MotionBox>
            ))}
            <MotionBox
              position="absolute"
              top="50%"
              left="50%"
              style={{ translateX: '-50%', translateY: '-50%' }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Box bg={cardBg} border="1px solid" borderColor={borderColor} px={5} py={3} rounded="full" shadow="md">
                <HStack spacing={3}>
                  <Icon as={FaRobot} color="brand.500" />
                  <Text fontWeight="semibold">Automation Core</Text>
                </HStack>
              </Box>
            </MotionBox>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {aiSkills.map((skill, index) => (
              <MotionBox
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
              >
                <VStack
                  align="start"
                  spacing={4}
                  bg={cardBg}
                  border="1px solid"
                  borderColor={borderColor}
                  rounded="xl"
                  p={6}
                  shadow="sm"
                  _hover={{ transform: 'translateY(-3px)', shadow: 'md' }}
                  transition="all 0.2s"
                >
                  <HStack spacing={3}>
                    <Icon as={skill.icon} boxSize={6} color="brand.500" />
                    <Heading as="h3" size="md">{skill.title}</Heading>
                  </HStack>
                  <Text color={textColor}>{skill.description}</Text>
                  <HStack spacing={2} wrap="wrap">
                    {skill.tags.map((tag) => (
                      <Badge key={tag} colorScheme="brand" variant="subtle" px={3} py={1} borderRadius="full">
                        {tag}
                      </Badge>
                    ))}
                  </HStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

