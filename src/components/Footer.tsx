import {
  Box,
  Container,
  Text,
  Link,
  HStack,
  Icon,
  useColorModeValue,
  VStack,
  Button,
  Divider,
  Flex,
} from '@chakra-ui/react'
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const iconColor = useColorModeValue('gray.500', 'gray.400')

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/gabrielsgit26',
      label: 'GitHub',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:apextechnicalconsulting@gmail.com',
      label: 'Email',
    },
    {
      icon: FaPhone,
      href: 'tel:+19257277571',
      label: 'Phone',
    },
  ]

  const quickLinks = [
    { label: t('nav.about'), to: 'about' },
    { label: t('skills.title'), to: 'skills' },
    { label: t('nav.projects'), to: 'projects' },
  ]

  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px"
      borderColor={borderColor}
      py={12}
    >
      <Container maxW="1200px">
        <VStack spacing={8}>
          <Flex
            w="100%"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'center', md: 'flex-start' }}
            gap={8}
          >
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
              <Text
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, brand.500, brand.700)"
                bgClip="text"
              >
                Gabriel Rios
              </Text>
              <Text color={textColor} textAlign={{ base: 'center', md: 'left' }}>
                {t('hero.subtitle')}
              </Text>
            </VStack>

            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
              <Text fontWeight="bold" color={textColor}>
                {t('footer.quickLinks')}
              </Text>
              {quickLinks.map((link) => (
                <ScrollLink
                  key={link.label}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Button
                    variant="ghost"
                    color={textColor}
                    _hover={{ color: 'brand.500' }}
                    size="sm"
                  >
                    {link.label}
                  </Button>
                </ScrollLink>
              ))}
            </VStack>

            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4}>
              <Text fontWeight="bold" color={textColor}>
                {t('footer.connect')}
              </Text>
              <HStack spacing={4}>
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    isExternal
                    aria-label={link.label}
                  >
                    <Icon
                      as={link.icon}
                      w={6}
                      h={6}
                      color={iconColor}
                      transition="all 0.2s"
                      _hover={{
                        color: 'brand.500',
                        transform: 'translateY(-2px)',
                      }}
                    />
                  </Link>
                ))}
              </HStack>
            </VStack>
          </Flex>

          <Divider borderColor={borderColor} />

          <Flex
            w="100%"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text color={textColor} textAlign="center">
              {t('footer.copyright')}
            </Text>
            <Text color={textColor} display="flex" alignItems="center" gap={2}>
              {t('footer.madeWith')}
            </Text>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
} 