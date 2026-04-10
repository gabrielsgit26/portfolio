import { Box, Heading, SimpleGrid, Text, VStack, useColorModeValue, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
const MotionBox = motion(Box)


const experiences = [
  { id: 'apex', title: 'apex' },
  { id: 'bluepeak', title: 'bluepeak' },
  { id: 'bell', title: 'bell' },
]

export const GamesSection = () => {
  const { t } = useTranslation()
  const sectionBg = useColorModeValue('white', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const descColor = useColorModeValue('gray.600', 'gray.300')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box as="section" py={20} id="games" bg={sectionBg}>
      <Container maxW={{ base: "100%", md: "1280px" }} px={{ base: 4, md: 8 }}>
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="xl" textAlign="center" mb={8} bgGradient="linear(to-r, brand.500, brand.700)" bgClip="text">
              {t('games.title')}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6} mb={12}>
              {experiences.map((item) => (
                <Box
                  key={item.id}
                  p={6}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="md"
                  border="1px solid"
                  borderColor={borderColor}
                  transition="all 0.2s"
                  _hover={{ boxShadow: 'xl', transform: 'translateY(-2px)' }}
                >
                  <VStack spacing={3} align="start">
                    <Heading as="h3" size="md">{t(`games.items.${item.title}.title`)}</Heading>
                    <Text color={descColor}>{t(`games.items.${item.title}.description`)}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default GamesSection;
