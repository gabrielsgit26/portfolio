import { Box, Button, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const hoverBg = useColorModeValue('gray.50', 'gray.700')

  const languages = [
    { code: 'en', name: t('language.en'), flag: '🇺🇸' },
    { code: 'ja', name: t('language.ja'), flag: '🇯🇵' },
    { code: 'zh', name: t('language.zh'), flag: '🇨🇳' }
  ]

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setCurrentLang(langCode)
  }

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        size="sm"
        px={3}
        py={2}
        bg={bgColor}
        border="1px solid"
        borderColor={borderColor}
        borderRadius="md"
        _hover={{ bg: hoverBg }}
        _active={{ bg: hoverBg }}
        transition="all 0.2s"
      >
        <Box display="flex" alignItems="center" gap={2}>
          <span>{currentLanguage.flag}</span>
          <span>{currentLanguage.name}</span>
        </Box>
      </MenuButton>
      <MenuList bg={bgColor} borderColor={borderColor}>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            bg={currentLang === lang.code ? hoverBg : 'transparent'}
            _hover={{ bg: hoverBg }}
            icon={<span>{lang.flag}</span>}
          >
            {lang.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
