import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaLightbulb } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { useTranslation } from 'react-i18next'

const MotionBox = motion(Box)

interface FeatureProps {
  icon: IconType
  title: string
  text: string
}

const Feature = ({ icon, title, text }: FeatureProps) => {
  return (
    <VStack
      p={8}
      bg={useColorModeValue('white', 'gray.800')}
      rounded="2xl"
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      shadow="sm"
      spacing={4}
      align="start"
      transition="all 0.2s"
      _hover={{ shadow: 'md', borderColor: 'brand.200' }}
    >
      <Icon as={icon} w={10} h={10} color="brand.500" />
      <Heading size="md">{title}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>{text}</Text>
    </VStack>
  )
}

export const About = () => {
  const { t } = useTranslation()
  return (
    <Box
      as="section"
      py={{ base: 20, md: 24 }}
      bg={useColorModeValue('white', 'gray.900')}
      id="about"
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
                color={useColorModeValue('gray.900', 'white')}
              >
                {t('about.title')}
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')} maxW="640px" fontSize="lg">
                A concise overview of how I approach product engineering—aligned with a polished portfolio presentation.
              </Text>
            </VStack>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Feature
                icon={FaCode}
                title={t('about.features.fullstack.title')}
                text={t('about.features.fullstack.description')}
              />
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Feature
                icon={FaPalette}
                title={t('about.features.uiux.title')}
                text={t('about.features.uiux.description')}
              />
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Feature
                icon={FaLightbulb}
                title={t('about.features.problemsolving.title')}
                text={t('about.features.problemsolving.description')}
              />
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 