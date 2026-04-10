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
    /** Monochrome accent — neutral zinc-style grays (black / white / gray only). */
    brand: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
  },
  radii: {
    xl: '1rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
  },
  shadows: {
    outline: '0 0 0 3px rgba(113, 113, 122, 0.45)',
    card: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
    cardLg: '0 20px 50px -12px rgba(15, 23, 42, 0.12)',
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : '#fafafa',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        transition: 'background-color 0.2s, color 0.2s',
      },
      '::selection': {
        bg: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
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