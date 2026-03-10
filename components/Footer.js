'use client'

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 py-12 sm:py-16 px-4 sm:px-6 bg-cyber-black">
      <div className="absolute inset-0 grain opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-black mb-3 sm:mb-4">
              NOVEX<span className="text-cyber-blue">OS</span>
            </h3>
            <p className="font-body text-gray-400 text-xs sm:text-sm">
              Next generation operating system built from scratch by Omega Developments.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-bold mb-3 sm:mb-4 text-cyber-blue tracking-wider">RESOURCES</h4>
            <ul className="space-y-1 sm:space-y-2 font-body text-xs sm:text-sm">
              <li>
                <a href="https://github.com/omegadevelopmentsfr/NovexOS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/omegadevelopmentsfr/NovexOS/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/omegadevelopmentsfr/NovexOS/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Report Issues
                </a>
              </li>
              <li>
                <a href="https://github.com/omegadevelopmentsfr/NovexOS/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Discussions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-bold mb-3 sm:mb-4 text-cyber-purple tracking-wider">COMMUNITY</h4>
            <ul className="space-y-1 sm:space-y-2 font-body text-xs sm:text-sm">
              <li>
                <a href="https://omegadevelopmentsfr.dpdns.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-purple transition-colors">
                  Omega Developments
                </a>
              </li>
              <li>
                <a href="mailto:omegadevelopmentsfr@gmail.com" className="text-gray-400 hover:text-cyber-purple transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="font-body text-gray-500 text-xs">
            © 2026 Omega Developments. Licensed under CC BY-ND 4.0
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 font-body text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
              VERSION 0.6.0-ALPHA
            </span>
            <span>BUILT WITH DEDICATION</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
