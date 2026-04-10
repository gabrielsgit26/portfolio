import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Badge,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Icon
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  technologies: string[]
  image: string
  /** Gradient border / backdrop behind the screenshot (same idea as the old generated thumbnails). */
  backdropGradient: string
  category: string
  demoUrl?: string
}

/** Files in `public/assets/img/` — filenames with spaces/parentheses must be encoded in URLs. */
const projectImage = (filename: string) => `/assets/img/${encodeURIComponent(filename)}`

const projects: Project[] = [
  {
    id: 'yetbet',
    title: 'YetBet - Blockchain Prediction Platform',
    description: 'End-to-end blockchain prediction platform with secure transaction flows and scalable services.',
    longDescription: 'Built a complete prediction ecosystem with a robust backend architecture and interactive frontend. The platform emphasized transparency, security, and performance for transaction-heavy usage.',
    features: [
      'Scalable full-stack architecture',
      'Blockchain transaction and wallet logic',
      'Interactive user flows and responsive UI',
      'Performance and reliability optimization',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Blockchain', 'PostgreSQL'],
    image: projectImage('yetbet (1).png'),
    backdropGradient: 'linear(to-br, #a1a1aa, #3f3f46)',
    category: 'Web',
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Automation Systems',
    description: 'Automation and agent-based orchestration platform for API workflows and business operations.',
    longDescription: 'Developed Python and FastAPI services powering intelligent agents, API orchestration, and data-driven workflow automation to reduce manual operational effort.',
    features: [
      'AI agent and workflow orchestration',
      'FastAPI service design and integration',
      'Third-party API pipelines',
      'Production-ready modular architecture',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAPI', 'n8n', 'API Integrations'],
    image: projectImage('AI automation (2).png'),
    backdropGradient: 'linear(to-br, #d4d4d8, #52525b)',
    category: 'AI',
  },
  {
    id: 'enterprise-modernization',
    title: 'Enterprise Platform Modernization',
    description: 'Modernized legacy enterprise systems into high-performance, responsive web platforms.',
    longDescription: 'Led modernization initiatives including frontend rebuilds, backend integration improvements, and deployment hardening across enterprise and client-facing systems.',
    features: [
      'Legacy-to-modern migration strategy',
      'Responsive frontend rebuild',
      'Backend/data integration improvements',
      'SEO and performance gains',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'SEO', 'Cloud Deployment'],
    image: projectImage('New Project.png'),
    backdropGradient: 'linear(to-br, #71717a, #27272a)',
    category: 'Web',
  },
  // {
  //   id: 'api-microservices',
  //   title: 'High-Performance API & Microservices Suite',
  //   description: 'Cloud-ready microservices platform for distributed application workloads.',
  //   longDescription: 'Architected and maintained RESTful APIs and service boundaries for distributed systems, focusing on low latency, resilience, and maintainable service contracts.',
  //   features: [
  //     'RESTful API architecture',
  //     'Microservice decomposition',
  //     'Reliability and throughput tuning',
  //     'Cloud deployment patterns',
  //   ],
  //   technologies: ['Node.js', 'Python', 'REST API', 'AWS', 'Azure'],
  //   image: projectImage('Project3.png'),
  //   backdropGradient: 'linear(to-br, #a1a1aa, #52525b)',
  //   category: 'Backend',
  // },
  // {
  //   id: 'seo-performance',
  //   title: 'SEO & Performance Optimization Program',
  //   description: 'Improved engagement and traffic through measurable frontend and delivery optimizations.',
  //   longDescription: 'Implemented performance budgets, asset optimization, rendering improvements, and SEO upgrades that significantly increased discoverability and user engagement.',
  //   features: [
  //     'Lighthouse and Core Web Vitals improvements',
  //     'SEO metadata and indexing enhancements',
  //     'Frontend rendering optimization',
  //     'Cross-browser stability improvements',
  //   ],
  //   technologies: ['React', 'TypeScript', 'SEO', 'Performance', 'Analytics'],
  //   image: projectImage('New Project.png'),
  //   backdropGradient: 'linear(to-br, #e4e4e7, #71717a)',
  //   category: 'Optimization',
  // },
  // {
  //   id: 'cloud-reliability',
  //   title: 'Cloud Reliability & DevOps Enhancements',
  //   description: 'Improved response times and reliability for production systems across AWS/Azure.',
  //   longDescription: 'Drove cloud-level reliability and scalability improvements, including deployment strategy updates, monitoring, and service performance optimization across production environments.',
  //   features: [
  //     'Cloud architecture and tuning',
  //     'Deployment and rollback improvements',
  //     'Monitoring and reliability upgrades',
  //     'Cost and performance balancing',
  //   ],
  //   technologies: ['AWS', 'Azure', 'Monitoring', 'DevOps', 'Scalability'],
  //   image: projectImage('AI automation (2).png'),
  //   backdropGradient: 'linear(to-br, #52525b, #18181b)',
  //   category: 'Cloud',
  // },
  {
    id: 'wordpress-corporate',
    title: 'WordPress Corporate Website Suite',
    description: 'Multi-page corporate WordPress website with custom theme, SEO optimization, and CMS workflows.',
    longDescription: 'Designed and delivered a professional WordPress solution for a business client including custom theme components, reusable page templates, lead capture forms, and SEO-ready structure for marketing teams.',
    features: [
      'Custom WordPress theme and template architecture',
      'Elementor/Gutenberg compatible content blocks',
      'SEO and performance optimization',
      'Lead generation forms and analytics integration',
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'SEO'],
    image: projectImage('wordpress.png'),
    backdropGradient: 'linear(to-br, #71717a, #3f3f46)',
    category: 'CMS',
  },
  {
    id: 'mobile-finance-app',
    title: 'Mobile Finance Companion App',
    description: 'Cross-platform mobile application concept delivered in React Native and Flutter variants.',
    longDescription: 'Built a mobile finance experience for iOS and Android with two implementation tracks (React Native and Flutter) to validate velocity, UX consistency, and maintainability for product roadmap decisions.',
    features: [
      'Cross-platform mobile UX architecture',
      'Secure authentication and profile management',
      'Dashboard, budgets, and transaction insights',
      'Push notifications and offline-ready patterns',
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript', 'Dart'],
    image: projectImage('react native.png'),
    backdropGradient: 'linear(to-br, #e4e4e7, #a1a1aa)',
    category: 'Mobile',
  },
  {
    id: 'arcade-crash-game',
    title: 'SkyRush Arcade Crash Game',
    description: 'Real-time browser game prototype with multiplayer events, leaderboards, and animated gameplay.',
    longDescription: 'Developed a game prototype focused on smooth gameplay loops, event-driven scoring, and lightweight multiplayer interactions. The project included game balancing tools and analytics hooks for iteration.',
    features: [
      'Real-time gameplay engine and scoring',
      'Live leaderboard and event updates',
      'Responsive game UI for desktop/mobile',
      'Gameplay telemetry for balancing',
    ],
    technologies: ['Phaser', 'TypeScript', 'Node.js', 'Socket.IO', 'Redis'],
    image: projectImage('carsh game.png'),
    backdropGradient: 'linear(to-br, #27272a, #71717a)',
    category: 'Game',
  },
]

const ProjectCard = ({ project, onOpen, setSelectedProject }: { project: Project; onOpen: () => void; setSelectedProject: (project: Project) => void }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const innerBg = useColorModeValue('gray.100', 'gray.900')

  return (
    <Box
      bg={bgColor}
      rounded="2xl"
      shadow="sm"
      overflow="hidden"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-6px)',
        shadow: 'lg',
        borderColor: 'brand.200',
      }}
      cursor="pointer"
      onClick={() => {
        setSelectedProject(project)
        onOpen()
      }}
    >
      <Box borderTopRadius="2xl" overflow="hidden">
        <Box position="relative" h="190px" bgGradient={project.backdropGradient} p="3px">
          <Box position="absolute" inset={0} bgGradient={project.backdropGradient} opacity={0.92} />
          <Box
            position="absolute"
            top="-25%"
            right="-8%"
            w="200px"
            h="200px"
            borderRadius="full"
            bg="whiteAlpha.300"
            filter="blur(56px)"
            pointerEvents="none"
          />
          <Box
            position="absolute"
            bottom="-20%"
            left="-5%"
            w="180px"
            h="180px"
            borderRadius="full"
            bg="blackAlpha.300"
            filter="blur(48px)"
            pointerEvents="none"
          />
          <Box
            position="relative"
            h="184px"
            overflow="hidden"
            borderTopRadius="xl"
            borderBottomRadius="md"
            bg={innerBg}
            zIndex={1}
          >
            <Image src={project.image} alt={project.title} h="100%" w="100%" objectFit="cover" />
          </Box>
        </Box>
      </Box>
      <Box p={6}>
        <HStack justify="space-between" mb={2}>
          <Heading size="md">{project.title}</Heading>
          <Badge colorScheme="brand" variant="subtle">{project.category}</Badge>
        </HStack>
        <Text color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
          {project.description}
        </Text>
        <Flex wrap="wrap" gap={2}>
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              colorScheme="brand"
              variant="subtle"
              px={2}
              py={1}
              rounded="md"
            >
              {tech}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

const ProjectModal = ({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) => {
  const modalInnerBg = useColorModeValue('gray.100', 'gray.900')
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent rounded="2xl" overflow="hidden">
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box position="relative" mb={4} borderRadius="xl" overflow="hidden" bgGradient={project.backdropGradient} p="3px">
            <Box position="absolute" inset={0} bgGradient={project.backdropGradient} opacity={0.92} />
            <Box
              position="absolute"
              top="-20%"
              right="-5%"
              w="240px"
              h="240px"
              borderRadius="full"
              bg="whiteAlpha.300"
              filter="blur(64px)"
              pointerEvents="none"
            />
            <Box
              position="absolute"
              bottom="-15%"
              left="-5%"
              w="200px"
              h="200px"
              borderRadius="full"
              bg="blackAlpha.300"
              filter="blur(56px)"
              pointerEvents="none"
            />
            <Box position="relative" h="260px" borderRadius="lg" overflow="hidden" bg={modalInnerBg} zIndex={1}>
              <Image src={project.image} alt={project.title} w="100%" h="100%" objectFit="cover" />
            </Box>
          </Box>
          <Text mb={4}>{project.longDescription}</Text>
          <Heading size="sm" mb={2}>Key Features:</Heading>
          <VStack align="start" spacing={2} mb={4}>
            {project.features.map((feature: string, index: number) => (
              <HStack key={index}>
                <Box w={2} h={2} bg="brand.500" rounded="full" />
                <Text>{feature}</Text>
              </HStack>
            ))}
          </VStack>
          <Heading size="sm" mb={2}>Technologies:</Heading>
          <Flex wrap="wrap" gap={2} mb={4}>
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                colorScheme="brand"
                variant="subtle"
                px={2}
                py={1}
                rounded="md"
              >
                {tech}
              </Badge>
            ))}
          </Flex>
          {project.demoUrl && (
            <Button as="a" href={project.demoUrl} target="_blank" leftIcon={<Icon as={FaExternalLinkAlt} />} variant="outline" colorScheme="brand">
              Visit Project
            </Button>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const headingColor = useColorModeValue('gray.900', 'white')
  const subColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box
      as="section"
      py={{ base: 20, md: 24 }}
      bg={bgColor}
      id="projects"
    >
      <Container maxW="1280px" px={{ base: 4, md: 8 }}>
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={3} textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="800"
                letterSpacing="-0.02em"
                color={headingColor}
              >
                Featured Projects
              </Heading>
              <Text color={subColor} maxW="720px" fontSize="lg">
                Case studies and builds spanning web, AI automation, mobile, cloud, and interactive experiences—tap a card for details.
              </Text>
            </VStack>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
            {projects.map((project, index) => (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectCard
                  project={project}
                  onOpen={onOpen}
                  setSelectedProject={setSelectedProject}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Box>
  )
} 