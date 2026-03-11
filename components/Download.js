'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Download() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  return (
    <section id="download" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-cyber-black grid-bg overflow-hidden">
      <div className="absolute inset-0 grain"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-64 sm:w-96 h-64 sm:h-96 border border-cyber-blue/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 sm:w-64 h-48 sm:h-64 border border-cyber-purple/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 tracking-tight px-4">
            GET <span className="text-cyber-blue glitch">NOVEXOS</span>
          </h2>
          
          <p className="font-body text-gray-400 text-base sm:text-lg mb-3 sm:mb-4 max-w-2xl mx-auto px-4">
            Download the latest alpha release and experience the future of operating systems.
          </p>
          
          <p className="font-body text-cyber-pink text-xs sm:text-sm mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            ⚠️ Alpha software: Not recommended for production use or daily driver
          </p>
          
          {/* Download options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12 sm:mb-16">
            {/* ISO Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative border-2 border-cyber-blue p-6 sm:p-8 hover:bg-cyber-blue/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💿</div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-cyber-blue">ISO IMAGE</h3>
                <p className="font-body text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                  Bootable ISO for QEMU or VirtualBox
                </p>
                <a
                  href="https://github.com/omegadevelopmentsfr/NovexOS/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-cyber-blue text-cyber-black font-display text-sm sm:text-base font-bold tracking-wider hover:bg-cyber-green transition-all duration-300 hover:scale-105"
                >
                  DOWNLOAD ISO
                </a>
              </div>
              
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 border-t-2 border-r-2 border-cyber-blue opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            </motion.div>
            
            {/* Source Code */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative border-2 border-cyber-purple p-6 sm:p-8 hover:bg-cyber-purple/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚙️</div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-cyber-purple">SOURCE CODE</h3>
                <p className="font-body text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                  Build from source on Linux
                </p>
                <a
                  href="https://github.com/omegadevelopmentsfr/NovexOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-cyber-purple text-cyber-black font-display text-sm sm:text-base font-bold tracking-wider hover:bg-cyber-pink transition-all duration-300 hover:scale-105"
                >
                  VIEW ON GITHUB
                </a>
              </div>
              
              <div className="absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 border-b-2 border-l-2 border-cyber-purple opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            </motion.div>
          </div>
          
          {/* System Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-gray-800 p-6 sm:p-8 max-w-2xl mx-auto"
          >
            <h3 className="font-display text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-cyber-green">SYSTEM REQUIREMENTS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left font-body text-xs sm:text-sm">
              <div>
                <div className="text-cyber-blue mb-1 sm:mb-2">▸ PROCESSOR</div>
                <div className="text-gray-400 mb-3 sm:mb-4">x86-64 compatible CPU</div>
                
                <div className="text-cyber-blue mb-1 sm:mb-2">▸ MEMORY</div>
                <div className="text-gray-400 mb-3 sm:mb-4">Minimum 512 MB RAM</div>
              </div>
              <div>
                <div className="text-cyber-blue mb-1 sm:mb-2">▸ STORAGE</div>
                <div className="text-gray-400 mb-3 sm:mb-4">200 MB available space</div>
                
                <div className="text-cyber-blue mb-1 sm:mb-2">▸ BOOT MODE</div>
                <div className="text-gray-400 mb-3 sm:mb-4">BIOS or UEFI</div>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-12 max-w-2xl mx-auto text-left border border-gray-800 p-6 sm:p-8"
          >
            <h3 className="font-display text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-cyber-pink">QUICK START</h3>
            <div className="font-body text-xs sm:text-sm space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-cyber-blue flex-shrink-0 mt-1">1.</span>
                <span className="text-gray-400 break-all">Clone the repository: <code className="text-cyber-green bg-gray-900 px-1 sm:px-2 py-1 text-xs">git clone https://github.com/omegadevelopmentsfr/NovexOS.git</code></span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-cyber-blue flex-shrink-0 mt-1">2.1.</span>
                <span className="text-gray-400">Build the ISO: <code className="text-cyber-green bg-gray-900 px-1 sm:px-2 py-1 text-xs">make build</code></span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-cyber-blue flex-shrink-0 mt-1">2.2.</span>
                <span className="text-gray-400">Build and run in QEMU: <code className="text-cyber-green bg-gray-900 px-1 sm:px-2 py-1 text-xs">make run</code></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
