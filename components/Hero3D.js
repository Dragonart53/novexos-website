'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField({ isMobile }) {
  const points = useRef()
  const mousePos = useRef(new THREE.Vector3(0, 0, 0))
  const raycaster = useRef(new THREE.Raycaster())
  const mouse = useRef(new THREE.Vector2())
  const { camera, size } = useThree()
  
  // Reduce particles on mobile for performance
  const particleCount = isMobile ? 800 : 1500
  
  // Store original positions
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const originalPositions = new Float32Array(particleCount * 3)
    
    const spreadSize = isMobile ? 60 : 80
    
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spreadSize
      const y = (Math.random() - 0.5) * spreadSize
      const z = (Math.random() - 0.5) * spreadSize
      
      positions.set([x, y, z], i * 3)
      originalPositions.set([x, y, z], i * 3)
    }
    
    return { positions, originalPositions }
  }, [particleCount, isMobile])
  
  // Mouse move handler
  const handleMouseMove = (event) => {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    const clientY = event.touches ? event.touches[0].clientY : event.clientY
    mouse.current.x = (clientX / size.width) * 2 - 1
    mouse.current.y = -(clientY / size.height) * 2 + 1
  }
  
  // Add event listeners
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('touchmove', handleMouseMove)
      }
    }
  }, [size])
  
  useFrame((state) => {
    if (!points.current) return
    
    // Rotate particles
    points.current.rotation.y = state.clock.elapsedTime * 0.05
    points.current.rotation.x = state.clock.elapsedTime * 0.03
    
    // Update raycaster
    raycaster.current.setFromCamera(mouse.current, camera)
    const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const intersectPoint = new THREE.Vector3()
    raycaster.current.ray.intersectPlane(intersectPlane, intersectPoint)
    
    // Update mouse position
    mousePos.current.lerp(intersectPoint, 0.1)
    
    // Update particle positions based on mouse proximity
    const particlePositions = points.current.geometry.attributes.position.array
    const interactionRadius = isMobile ? 6 : 8
    const repelStrength = isMobile ? 2 : 3
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Get original position
      const origX = originalPositions[i3]
      const origY = originalPositions[i3 + 1]
      const origZ = originalPositions[i3 + 2]
      
      // Calculate distance to mouse
      const dx = origX - mousePos.current.x
      const dy = origY - mousePos.current.y
      const dz = origZ - mousePos.current.z
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
      
      if (distance < interactionRadius) {
        // Repel particles away from mouse
        const force = (1 - distance / interactionRadius) * repelStrength
        particlePositions[i3] = origX + (dx / distance) * force
        particlePositions[i3 + 1] = origY + (dy / distance) * force
        particlePositions[i3 + 2] = origZ + (dz / distance) * force
      } else {
        // Return to original position
        particlePositions[i3] += (origX - particlePositions[i3]) * 0.1
        particlePositions[i3 + 1] += (origY - particlePositions[i3 + 1]) * 0.1
        particlePositions[i3 + 2] += (origZ - particlePositions[i3 + 2]) * 0.1
      }
    }
    
    points.current.geometry.attributes.position.needsUpdate = true
  })
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.25 : 0.2}
        color="#00d4ff"
        sizeAttenuation
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingCore({ isMobile }) {
  const meshRef = useRef()
  const mouse = useRef(new THREE.Vector2())
  const { size } = useThree()
  
  // Mouse move handler
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (event) => {
        const clientX = event.touches ? event.touches[0].clientX : event.clientX
        const clientY = event.touches ? event.touches[0].clientY : event.clientY
        mouse.current.x = (clientX / size.width) * 2 - 1
        mouse.current.y = -(clientY / size.height) * 2 + 1
      }
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('touchmove', handleMouseMove)
      }
    }
  }, [size])
  
  useFrame((state) => {
    if (meshRef.current) {
      const mouseInfluence = isMobile ? 0.2 : 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 + mouse.current.y * mouseInfluence
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4 + mouse.current.x * mouseInfluence
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      
      // Slight scale pulse on mouse movement
      const mouseDistance = Math.sqrt(mouse.current.x ** 2 + mouse.current.y ** 2)
      const scaleInfluence = isMobile ? 0.05 : 0.1
      const targetScale = 1 + mouseDistance * scaleInfluence
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })
  
  const coreSize = isMobile ? 1.5 : 2
  
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[coreSize, 1]} />
      <meshStandardMaterial
        color="#6c63ff"
        roughness={0.2}
        metalness={0.8}
        emissive="#6c63ff"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function OrbitRing({ radius, speed, color, isMobile }) {
  const ringRef = useRef()
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed
    }
  })
  
  const thickness = isMobile ? 0.04 : 0.05
  
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={isMobile ? 0.5 : 0.6} />
    </mesh>
  )
}

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const cameraPosition = isMobile ? [0, 0, 20] : [0, 0, 15]
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: cameraPosition, fov: 75 }}
          gl={{ 
            alpha: true, 
            antialias: false,
            powerPreference: 'high-performance',
            stencil: false,
            depth: false
          }}
          dpr={isMobile ? [1, 1] : [1, 1.5]}
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff006e" />
          
          <ParticleField isMobile={isMobile} />
          <FloatingCore isMobile={isMobile} />
          <OrbitRing radius={isMobile ? 2.5 : 3.5} speed={0.3} color="#00d4ff" isMobile={isMobile} />
          <OrbitRing radius={isMobile ? 3.2 : 4.5} speed={-0.2} color="#ff006e" isMobile={isMobile} />
          <OrbitRing radius={isMobile ? 4 : 5.5} speed={0.15} color="#00ff9f" isMobile={isMobile} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={isMobile ? 0.3 : 0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enabled={!isMobile}
          />
        </Canvas>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 scanlines">
        <div className="grain absolute inset-0"></div>
        
        <div className="relative z-20 max-w-5xl w-full">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 glitch tracking-tight leading-none">
            NOVEX<span className="text-cyber-blue">OS</span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl font-body text-gray-300 mb-3 sm:mb-4 tracking-wider px-4">
            NEXT GENERATION OPERATING SYSTEM
          </p>
          
          <p className="text-sm sm:text-base md:text-lg font-body text-cyber-blue mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Built from scratch. Custom kernel. Zero compromises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <a
              href="#download"
              className="w-full sm:w-auto group relative px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-cyber-blue font-display text-base sm:text-lg font-bold tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-cyber-black transition-colors duration-300">
                DOWNLOAD
              </span>
              <div className="absolute inset-0 bg-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 neon-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://github.com/omegadevelopmentsfr/NovexOS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-cyber-pink font-display text-base sm:text-lg font-bold tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-cyber-black transition-colors duration-300">
                VIEW SOURCE
              </span>
              <div className="absolute inset-0 bg-cyber-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
          
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-cyber-blue group-hover:text-cyber-green transition-colors">
                0.7.1
              </div>
              <div className="text-xs sm:text-sm font-body text-gray-400 mt-1 sm:mt-2">CURRENT VERSION</div>
            </div>
            <div className="group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-cyber-purple group-hover:text-cyber-blue transition-colors">
                ALPHA
              </div>
              <div className="text-xs sm:text-sm font-body text-gray-400 mt-1 sm:mt-2">DEVELOPMENT STATUS</div>
            </div>
            <div className="group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-cyber-green group-hover:text-cyber-pink transition-colors">
                100%
              </div>
              <div className="text-xs sm:text-sm font-body text-gray-400 mt-1 sm:mt-2">CUSTOM BUILT</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-black to-transparent z-10"></div>
    </div>
  )
}
