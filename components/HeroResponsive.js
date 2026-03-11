'use client'

import { useIsMobile } from './useIsMobile'
import Hero3D from './Hero3DDesktop'
import HeroMobile from './HeroMobile'

export default function Hero() {
  const isMobile = useIsMobile()
  
  if (isMobile) {
    return <HeroMobile />
  }
  
  return <Hero3D />
}
