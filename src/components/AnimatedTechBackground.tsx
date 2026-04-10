import { Box, Icon, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaJsSquare,
  FaCloud,
} from 'react-icons/fa'
import { SiTypescript, SiFastapi, SiMongodb } from 'react-icons/si'
import type { IconType } from 'react-icons'

const MotionBox = motion(Box)

interface FloatingIcon {
  icon: IconType
  top: string
  left: string
  size: number
  duration: number
  delay: number
}

const floatingIcons: FloatingIcon[] = [
  { icon: FaReact, top: '8%', left: '7%', size: 28, duration: 8, delay: 0 },
  { icon: FaNodeJs, top: '18%', left: '82%', size: 28, duration: 9, delay: 0.6 },
  { icon: FaPython, top: '68%', left: '10%', size: 30, duration: 10, delay: 1.2 },
  { icon: SiTypescript, top: '78%', left: '76%', size: 26, duration: 8.5, delay: 1.8 },
  { icon: SiFastapi, top: '36%', left: '88%', size: 24, duration: 9.5, delay: 2.3 },
  { icon: FaAws, top: '30%', left: '4%', size: 24, duration: 8.8, delay: 0.4 },
  { icon: SiMongodb, top: '56%', left: '86%', size: 24, duration: 10, delay: 0.9 },
  { icon: FaDatabase, top: '83%', left: '34%', size: 24, duration: 9.2, delay: 1.4 },
  { icon: FaJsSquare, top: '12%', left: '52%', size: 24, duration: 8.6, delay: 2.1 },
  { icon: FaCloud, top: '62%', left: '45%', size: 24, duration: 9.7, delay: 2.6 },
]

export const AnimatedTechBackground = () => {
  const iconColor = useColorModeValue('brand.400', 'brand.300')
  const blurColorA = useColorModeValue('brand.100', 'brand.700')
  const blurColorB = useColorModeValue('purple.100', 'purple.700')

  return (
    <Box position="absolute" inset={0} pointerEvents="none" overflow="hidden" aria-hidden="true">
      <MotionBox
        position="absolute"
        top="-10%"
        left="-10%"
        w={{ base: '260px', md: '420px' }}
        h={{ base: '260px', md: '420px' }}
        borderRadius="full"
        bg={blurColorA}
        opacity={0.15}
        filter="blur(90px)"
        animate={{ x: [0, 30, -15, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MotionBox
        position="absolute"
        right="-12%"
        bottom="-15%"
        w={{ base: '300px', md: '460px' }}
        h={{ base: '300px', md: '460px' }}
        borderRadius="full"
        bg={blurColorB}
        opacity={0.15}
        filter="blur(100px)"
        animate={{ x: [0, -35, 15, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {floatingIcons.map((item, index) => (
        <MotionBox
          key={`${item.top}-${item.left}-${index}`}
          position="absolute"
          top={item.top}
          left={item.left}
          animate={{
            y: [0, -20, 8, 0],
            x: [0, 8, -8, 0],
            rotate: [0, 6, -6, 0],
            opacity: [0.2, 0.6, 0.45, 0.2],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon as={item.icon} boxSize={`${item.size}px`} color={iconColor} />
        </MotionBox>
      ))}
    </Box>
  )
}

