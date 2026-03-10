'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere, TorusKnot } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const points = useRef()
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 100
      const y = (Math.random() - 0.5) * 100
      const z = (Math.random() - 0.5) * 100
      
      positions.set([x, y, z], i * 3)
    }
    
    return positions
  }, [])
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
      points.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#00d4ff"
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingCore() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <MeshDistortMaterial
        color="#6c63ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function OrbitRing({ radius, speed, color }) {
  const ringRef = useRef()
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed
    }
  })
  
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.05, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff006e" />
          
          <ParticleField />
          <FloatingCore />
          <OrbitRing radius={3.5} speed={0.3} color="#00d4ff" />
          <OrbitRing radius={4.5} speed={-0.2} color="#ff006e" />
          <OrbitRing radius={5.5} speed={0.15} color="#00ff9f" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 scanlines">
        <div className="grain absolute inset-0"></div>
        
        <div className="relative z-20 max-w-5xl">
          <h1 className="font-display text-7xl md:text-9xl font-black mb-6 glitch tracking-tight">
            NOVEX<span className="text-cyber-blue">OS</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-body text-gray-300 mb-4 tracking-wider">
            NEXT GENERATION OPERATING SYSTEM
          </p>
          
          <p className="text-base md:text-lg font-body text-cyber-blue mb-12 max-w-2xl mx-auto">
            Built from scratch. Custom kernel. Zero compromises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#download"
              className="group relative px-10 py-4 bg-transparent border-2 border-cyber-blue font-display text-lg font-bold tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
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
              className="group relative px-10 py-4 bg-transparent border-2 border-cyber-pink font-display text-lg font-bold tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-cyber-black transition-colors duration-300">
                VIEW SOURCE
              </span>
              <div className="absolute inset-0 bg-cyber-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="group">
              <div className="text-4xl font-display font-black text-cyber-blue group-hover:text-cyber-green transition-colors">
                0.6.0
              </div>
              <div className="text-sm font-body text-gray-400 mt-2">CURRENT VERSION</div>
            </div>
            <div className="group">
              <div className="text-4xl font-display font-black text-cyber-purple group-hover:text-cyber-blue transition-colors">
                ALPHA
              </div>
              <div className="text-sm font-body text-gray-400 mt-2">DEVELOPMENT STATUS</div>
            </div>
            <div className="group">
              <div className="text-4xl font-display font-black text-cyber-green group-hover:text-cyber-pink transition-colors">
                100%
              </div>
              <div className="text-sm font-body text-gray-400 mt-2">CUSTOM BUILT</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-black to-transparent z-10"></div>
    </div>
  )
}
