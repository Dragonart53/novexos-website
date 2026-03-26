'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const roadmapItems = [
  {
    status: 'completed',
    title: 'FOUNDATION',
    items: [
      'Stage 1 & 2 Bootloader',
      'Kernel entry point',
      'VGA text driver',
      'GDT & IDT setup',
      'Physical & virtual memory manager',
      'Keyboard & PS/2 driver',
      'Basic shell (NovexShell)',
      'NovexDE desktop environment',
      'Python 3 integration (NovexPY)',
    ],
  },
  {
    status: 'progress',
    title: 'SYSTEM & APPLICATIONS',
    items: [
      'OS installer (NovexInstaller)',
      'FAT32 support',
      'NTFS support',
      'Ext4 support',
      'basic application for the OS',
    ],
  },
  {
    status: 'planned',
    title: 'ADVANCED FEATURES',
    items: [
      'Process scheduler (round-robin)',
      'NovexFS custom filesystem',
      'ELF binary loader',
      'Networking stack (TCP/IP)',
      'Package manager',
      'Multi-core support (SMP)',
    ],
  },
]

function RoadmapSection({ section, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const statusColors = {
    completed: 'cyber-green',
    progress: 'cyber-blue',
    planned: 'cyber-purple',
  }
  
  const statusLabels = {
    completed: 'COMPLETED',
    progress: 'IN PROGRESS',
    planned: 'PLANNED',
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < roadmapItems.length - 1 && (
        <div className="absolute left-1/2 top-full w-0.5 h-12 sm:h-16 bg-gradient-to-b from-cyber-blue to-transparent transform -translate-x-1/2 hidden md:block"></div>
      )}
      
      <div className="group relative border border-gray-800 p-6 sm:p-8 hover:border-cyber-blue transition-all duration-300 overflow-hidden">
        {/* Background glow */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${statusColors[section.status]}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="relative z-10">
          {/* Status badge */}
          <div className={`inline-block px-3 sm:px-4 py-2 border-2 border-${statusColors[section.status]} mb-4 sm:mb-6`}>
            <span className={`font-display text-xs sm:text-sm font-bold text-${statusColors[section.status]} tracking-wider`}>
              {statusLabels[section.status]}
            </span>
          </div>
          
          <h3 className="font-display text-2xl sm:text-3xl font-black mb-4 sm:mb-6 group-hover:text-cyber-blue transition-colors duration-300">
            {section.title}
          </h3>
          
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                className="flex items-start gap-3 font-body text-gray-400"
              >
                <span className={`text-${statusColors[section.status]} mt-1 flex-shrink-0`}>▸</span>
                <span className="group-hover:text-gray-300 transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Corner decorations */}
        <div className={`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-${statusColors[section.status]} opacity-20 group-hover:opacity-60 transition-opacity duration-300`}></div>
        <div className={`absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-${statusColors[section.status]} opacity-20 group-hover:opacity-60 transition-opacity duration-300`}></div>
      </div>
    </motion.div>
  )
}

export default function Roadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-cyber-black via-cyber-black/95 to-cyber-black">
      <div className="absolute inset-0 grain"></div>
      
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-24 sm:top-32 bottom-24 sm:bottom-32 w-0.5 bg-gradient-to-b from-transparent via-cyber-blue to-transparent transform -translate-x-1/2 hidden md:block"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight px-4">
            DEVELOPMENT <span className="text-cyber-blue">ROADMAP</span>
          </h2>
          <p className="font-body text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Track our progress as we build the future of operating systems.
          </p>
        </motion.div>
        
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {roadmapItems.map((section, index) => (
            <RoadmapSection key={index} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
