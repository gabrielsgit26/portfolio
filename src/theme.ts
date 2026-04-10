import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: '"Plus Jakarta Sans", system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  colors: {
    brand: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
  },
  radii: {
    xl: '1rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
  },
  shadows: {
    outline: '0 0 0 3px rgba(99, 102, 241, 0.35)',
    card: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
    cardLg: '0 20px 50px -12px rgba(15, 23, 42, 0.12)',
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : '#f8fafc',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        transition: 'background-color 0.2s, color 0.2s',
      },
      '::selection': {
        bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.200',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
        transition: 'all 0.2s ease-in-out',
      },
      variants: {
        solid: (props: { colorMode: string }) => ({
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.600',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.700',
          },
        }),
        outline: (props: { colorMode: string }) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.500' : 'brand.600',
          color: props.colorMode === 'dark' ? 'brand.500' : 'brand.600',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.900' : 'brand.50',
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '600',
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.600',
      },
    },
    Card: {
      baseStyle: (props: { colorMode: string }) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          borderRadius: 'lg',
          boxShadow: 'md',
          p: 6,
        },
      }),
    },
    VStack: {
      baseStyle: {
        spacing: 4,
      },
    },
    SimpleGrid: {
      baseStyle: {
        spacing: 8,
      },
    },
  },
})

export default theme 