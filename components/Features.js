'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'CUSTOM KERNEL',
    description: 'Built entirely from scratch with no external OS base. Complete control over memory management, process scheduling, and system architecture.',
    icon: '⚡',
    color: 'cyber-blue',
  },
  {
    title: 'SECURE BY DESIGN',
    description: 'Memory safety and privilege separation baked in from day one. Security is not an afterthought - it\'s foundational.',
    icon: '🛡️',
    color: 'cyber-purple',
  },
  {
    title: 'PERFORMANCE FIRST',
    description: 'Lightweight architecture with zero unnecessary overhead. Every byte of code serves a purpose.',
    icon: '🚀',
    color: 'cyber-green',
  },
  {
    title: 'OPEN SOURCE',
    description: 'Free to use and integrate with mandatory attribution. Community-driven development with transparent roadmap.',
    icon: '💎',
    color: 'cyber-pink',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative p-6 sm:p-8 border border-gray-800 hover:border-cyber-blue transition-all duration-300 overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>
        
        <h3 className={`font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-${feature.color} group-hover:neon-text transition-all duration-300`}>
          {feature.title}
        </h3>
        
        <p className="font-body text-gray-400 leading-relaxed text-sm sm:text-base">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-cyber-black grid-bg">
      <div className="absolute inset-0 grain"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight px-4">
            CORE <span className="text-cyber-blue">PHILOSOPHY</span>
          </h2>
          <p className="font-body text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Every line of code in NovexOS serves a purpose. No bloat. No compromises.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
